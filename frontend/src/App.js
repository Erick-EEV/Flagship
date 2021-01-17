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
  
  // logIn = (username, password) => {
  //   this.setState({
  //     username: username,
  //     password: password
  //   })
  //   console.log("Submitted")
  
  // }

 
  render() {
    return (
      <div className="App">
    <Route exact path="/" component={() => <LoginPage />}></Route>
    <Route exact path="/loggedIn" component={SmallSidebar}></Route>
    <Route exact path="/signUp" component={SignUpForm}></Route>
      </div>
    )
  }
}

