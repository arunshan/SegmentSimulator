import React, { Component } from 'react'

import './index.css'

export default class Library extends Component {
  state = {
    value: 'nodejs'
  };

  getLibraries() {
    return (<select id="lang" onChange={(e) => this.change(e)} value={this.state.value}>
      <option value="nodejs">NodeJS</option>
      <option value="ruby">Ruby on rails</option>
      <option value="java">Java</option>
      <option value="closure">Closure</option>
      <option value="go">Go</option>
    </select>)
  }

  change(e) {
    this.props.setLibrary(e.target.value)
    this.setState({value: e.target.value})
  }

  render () {
    return (<div className="LIBRARY-container">
      <div className="LIBRARY-inner-container">
        <div>Which library?</div>
        {this.getLibraries()}
      </div>
    </div>)
  }
}
