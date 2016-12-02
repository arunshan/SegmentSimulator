import React, { Component } from 'react'
import './index.css'

export default class Logs extends Component {
  state= {
    logs: this.props.logs || []
  };
  componentWillReceiveProps(props) {
    if (props.logs.length !== this.props.logs.length) {
      this.setState({
        logs: props.logs
      })
    }
  }
  getStatusStyle (status) {
    if (status === 'success') {
      return "Logs-success"
    } else {
      return "Logs-failure"
    }
  }
  renderLogs() {
    const logs = this.state.logs
    let logsView = []
    logs.map((log, i) => {
      logsView.push(<div key={'key_' + i} className="Logs-row">
        <div className={this.getStatusStyle(log.status)}>
          {log.status + '  :  ' + log.eventName}
        </div>
        <div className="Logs-message">
          {JSON.stringify(log.message)}
        </div>
      </div>)
    })
    return logsView
  }
  render() {
    return (<div className="Logs-container">
      {this.renderLogs()}
    </div>)
  }
}
