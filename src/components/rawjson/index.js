import React, { Component } from 'react'
import './index.css'


export default class RawJson extends Component {
  state = {
    json: '',
    validJSON: true
  };

  componentWillReceiveProps (props) {
    if (props.validJSON !== this.props.validJSON) {
      this.setState({
        validJSON: props.validJSON
      })
    }
  }

  updateJson = (e) => {
    this.setState({
      json: e.target.value
    })
    this.props.setJSON(e.target.value)
  };

  getTextArea() {
    return <textarea className="RawJson-textarea"
      value={this.state.json}
      onChange={this.updateJson} />
  }

  showError() {
    if (!this.state.validJSON) {
      return <div className={'RawJson-error'}>{'Invalid JSON'}</div>
    }
  }

  render () {
    return (<div className="RawJson-container">
      {this.getTextArea()}
      {this.showError()}
    </div>)
  }
}
