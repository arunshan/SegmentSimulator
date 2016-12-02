import React, { Component } from 'react'
import './index.css'


export default class RawJson extends Component {
  state = {
    json: ''
  };

  updateJson(json) {
    this.setState({
      json
    })
  }

  getTextArea() {
    return <textarea className="RawJson-textarea" value={this.state.json} onChange={this.updateJson} />
  }

  render () {
    return (<div className="RawJson-container">
      {this.getTextArea()}
    </div>)
  }
}
