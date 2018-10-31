import React from 'react'
import Home from './views/home'
import Footer from './components/Footer'
import Header from './components/Header'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    )
  }
}

export default App