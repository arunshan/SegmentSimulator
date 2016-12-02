import React, { Component } from 'react'
import './App.css'
import Header from './components/common/header'
import Events from './components/events'
import Library from './components/library'
import RawJson from './components/rawjson'

class App extends Component {
  renderButton () {
    return <button className="App-simulate-button" value="SIMULATE">SIMULATE</button>
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Library />
        <Events />
        <RawJson />
        {this.renderButton()}
      </div>
    )
  }
}

export default App
