import React, { Component } from 'react';
import './Home.css';
import NameForm from '../../../src/CommonComponents/NameForm/NameForm';
import ListUsers from '../../../src/CommonComponents/ListUsers/ListUsers';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {users : []};

    this.getTheList = this.getTheList.bind(this);
  }

  getTheList(name){
    const self = this;
      fetch(`https://api.github.com/search/users?q=${name}`).then(function(response) {
            return response.json();
          }).then(function(response) {
              self.setState({users: response.items});
           return response.items;
          });
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Search now</h2>
        </div>
        <div className="app-search-wrapper" >
                <NameForm handleSubmit ={this.getTheList}/>
        </div>
        <div className="app-content-wrapper">
            <ListUsers usersList = {this.state.users}/>
        </div>

      </div>
    );
  }
}

export default Home;
