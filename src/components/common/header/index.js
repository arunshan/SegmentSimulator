import React, { Component } from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-text">Analytics Simulator</div>
        <div className="Header-description">Simulate an API call from any segment library</div>
      </div>
    )
  }
}

export default Header
