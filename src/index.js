import React from 'react'
import { render } from 'react-dom'
{{#if redux}}
import { Provider } from 'react-redux'
import { store } from './store'
{{/if}}

import 'normalize.css'
import './common/styles/base.css'
import App from './App'

render(
  {{#if redux}}
  <Provider store={store}>
    <App />
  </Provider>,
  {{else}}
  <App />,
  {{/if}}
  document.getElementById('root')
)