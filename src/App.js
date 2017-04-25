
import React from 'react';
import { Link } from 'react-router-dom'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/home">Git Search</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
