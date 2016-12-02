import React, { Component } from 'react'
import './App.css'
import Header from './components/common/header'
import Events from './components/events'
import Library from './components/library'
import RawJson from './components/rawjson'
import Logs from './components/logs'
import api from '../api'

class App extends Component {
  state = {
    json: '',
    selectedEvent: 'Raw',
    selectedLanguage: 'nodejs',
    validJSON: true,
    logs: []
  };

  isJson(data) {
    var ret = true;
     try {
        JSON.parse(data)
     } catch(e) {
        ret = false;
     }
     return ret;
  }

  simulate () {
    const {
      json,
      selectedEvent,
      selectedLanguage
    } = this.state
    if (this.isJson(json)) {
      this.setState({
        validJSON: true
      })
    } else {
      this.setState({
        validJSON: false
      })
      return
    }
    if (json && selectedEvent && selectedLanguage) {
      let logs = this.state.logs
      api.simulate(selectedLanguage, selectedEvent, json)
        .then(data => {
          logs.push({
            status: data.status,
            message: data.message
          })
          this.setState({
            logs
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  renderButton () {
    return <button className="App-simulate-button" value="SIMULATE"
      onClick={() => this.simulate()}>SIMULATE</button>
  }

  render() {
    return (
      <div className="App">
        <Header {...this.props} />
        <Library {...this.props} setLibrary={(selectedLanguage) => this.setState({selectedLanguage})}/>
        <Events {...this.props} setEvent={(selectedEvent) => this.setState({selectedEvent})} />
        <RawJson {...this.props} validJSON={this.state.validJSON} setJSON={(json) => this.setState({json})} />
        {this.renderButton()}
        <Logs {...this.props} logs={this.state.logs} />
      </div>
    )
  }
}

export default App
