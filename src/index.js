import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import React, { Component } from 'react';
import User from '../src/Pages/User/User';
import About from '../src/Pages/About/About';
import Home from '../src/Pages/Home/Home';
// Import routing components
import { HashRouter as Router, Route ,hashHistory, IndexRoute} from 'react-router-dom'; 


ReactDOM.render(
    <Router history={hashHistory}>
        <div>
            <Route path="/" component={App}>
            </Route>
            <Route path="/home" component={Home}>
            </Route>
            <Route path="/about" component={About}>
            </Route>
            <Route path="/user/:id" component={User}>
            </Route>
        </div>
    </Router>,
  document.getElementById('root')
);
