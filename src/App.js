
import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Git searcher</h1>
        <ul className="navigation-wrapper">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/home">Git Search</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
