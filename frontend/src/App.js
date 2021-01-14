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
  
  logIn = (username, password) => {
    this.setState({
      username: username,
      password: password
    })
    console.log("Submitted")
  
  }

  submitCallBack(){
    let username = this.state.username
    let current_user = this.state.current_user
    let loggedIn = this.state.loggedIn
    let password = this.state.password

    let reqObj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({username})
    }
    let url = "http://localhost:3001/login"

    fetch(url)
    .then(response => response.json())
    .then(user => console.log(user))

  }
  
  render() {
    return (
      <div className="App">
    <Route exact path="/" component={() => <LoginPage logIn={this.logIn} submitCallBack={this.submitCallBack}/>}></Route>
    <Route exact path="/loggedIn" component={SmallSidebar}></Route>
    <Route exact path="/signUp" component={SignUpForm}></Route>
      </div>
    )
  }
}

