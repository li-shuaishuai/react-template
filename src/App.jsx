import React from 'react'
{{#if router}}
import { BrowserRouter, Route, Switch } from 'react-router-dom'
{{/if}}
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
          <Header />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
      {{else}}
      <React.Fragment>
        <Header />
        <Home/>
        <Footer />
      </React.Fragment>
      {{/if}}
    )
  }
}

export default App