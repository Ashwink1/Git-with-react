import React, { Component } from 'react';

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
        <div>
            <img src={this.state.user.avatar_url} width='102' height='102' />
            <div>Name :  {this.state.user.name} </div>
            <div>Login :  {this.state.user.login} </div>
            <div>blog :  {this.state.user.blog} </div>
            <div>followers :  {this.state.user.followers} </div>
            <div>location :  {this.state.user.location} </div>
            <div>public_repos :  {this.state.user.public_repos} </div>
        </div>
    );
  }
}
