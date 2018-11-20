import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './views/home'
{{#if router}}
import About from './views/about'
{{/if}}

class App extends React.Component {
  render() {
    return (
      {{#if router}}
      <BrowserRouter>
        <React.Fragment>
      {{/if}}
          <Header />
          {{#if router}}
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
          {{else}}
          <Home/>
          {{/if}}
          <Footer />
      {{#if router}}
        </React.Fragment>
      </BrowserRouter>
      {{/if}}
    )
  }
}

export default App