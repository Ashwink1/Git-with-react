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
    let self = this;
      fetch(`https://api.github.com/search/users?q=${name}`).then(function(response) {
            return response.json();
          }).then(function(response) {
              self.setState({users: response.items},()=>{
                          console.log(self.state);
                        });
           return response.items;
          });
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to My app</h2>
        </div>
        <div className="app-content-wrapper" >
        <NameForm
                handleSubmit ={this.getTheList}/>
        </div>
        <ListUsers
           usersList = {this.state.users}
        />

      </div>
    );
  }
}

export default Home;
