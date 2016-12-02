import React, { Component } from 'react'
import './index.css'

const EVENTS = [
  'Raw',
  'Identify',
  'Track',
  'Group',
  'Page',
  'Screen',
  'Alias'
]

export default class Events extends Component {
  state = {
    selected: 'Raw'
  };

  selectEvent(e) {
    this.setState({
      selected: e.target.innerHTML
    })
  }

  componentDidMount() {
    const classname = document.getElementsByClassName("Event-row-item")
    for (let i = 0; i < classname.length; i++) {
      classname[i].addEventListener('click', (e) => this.selectEvent(e), false)
    }
  }

  getSelectedClass(className) {
    return `Event-row-item ${this.state.selected === className ? 'Event-row-selected' : ''}`;
  }

  getEvents() {
    return (<div className="Events-row">
      {EVENTS.map((event, i) => {
        return (<div key={'event_' + i} className={this.getSelectedClass(event)}>
          <div className="Event-row-item-content">{event}</div>
        </div>)
      })}
    </div>)
  }

  render() {
    return (<div className="Events">
      {this.getEvents()}
    </div>)
  }
}
