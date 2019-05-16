import React from 'react'
import { render } from 'react-dom'
{{#if redux}}
import { Provider } from 'react-redux'
import { store } from './store'
{{/if}}

{{#with pwa}}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(() => {
      console.log('SW registered')
    }).catch(registrationError => {
      console.log('SW registration failed', registrationError)
    })
  })
}
{{/with}}

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
