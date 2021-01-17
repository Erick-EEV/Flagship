import './App.css';
import {Route} from 'react-router-dom'
import React, { Component } from 'react'


import LoginPage from './container/LoginPage'
import SmallSidebar from './container/SmallSidebar'
import SignUpForm from './presentational/SignUpForm'




export default class App extends Component {
  state = {
    current_user: [],
    username: "",
    loggedIn: false,
    password: ""
  }
  
  userInputs = (username) => {
    console.log(username);
    // this.setState({ ...this.state, [event.target.name]: event.target.value });
    this.setState({
      username: username
    })
  }

  getUser = (event) => {
    event.preventDefault()
    let url = "http://localhost:3000/login"
    let reqObj = {
      method: "GET",
      headers: {"Content-Type":"application/json",
    Accept:"application/json"},
    body: JSON.stringify({
      username: this.state.username
    })
    };

    fetch(url, reqObj)
    .then(resp => resp.json())
    .then(user => console.log(user))
  }

 
  render() {
    return (
      <div className="App">
    <Route exact path="/" component={() => <LoginPage userInputs={this.userInputs} getUser={this.getUser}/>}></Route>
    <Route exact path="/loggedIn" component={SmallSidebar}></Route>
    <Route exact path="/signUp" component={SignUpForm}></Route>
      </div>
    )
  }
}

