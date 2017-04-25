import React, { Component } from 'react';
import './User.css';

export default class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user:{}
    };
    this.getTheUser = this.getTheUser.bind(this);
  }

    getTheUser(name){
        let self = this;
        fetch(`https://api.github.com/user/${name}`).then(function(response) {
            return response.json();
        }).then(function(response) {
            self.setState({user: response});
            return response;
        });
    }

    componentWillMount(){
        this.getTheUser(this.props.match.params.id)
    }



  render() {
    return (
        <div className="user-info-wrapper">
            <img src={this.state.user.avatar_url} width='102' height='102' />
           <div className="user-wrapper">
               <div className="user-wrapper-text">Name :  {this.state.user.name} </div>
               <div className="user-wrapper-text">Login :  {this.state.user.login} </div>
               <div className="user-wrapper-text">blog :  {this.state.user.blog} </div>
               <div className="user-wrapper-text">followers :  {this.state.user.followers} </div>
               <div className="user-wrapper-text">location :  {this.state.user.location} </div>
               <div className="user-wrapper-text">public_repos :  {this.state.user.public_repos} </div>
           </div>
        </div>
    );
  }
}
