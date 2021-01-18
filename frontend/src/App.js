import React from 'react'
import './App.css';
import {Route} from 'react-router-dom'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


import LoginPage from './container/LoginPage'
import SmallSidebar from './container/SmallSidebar'
import SignUpForm from './presentational/SignUpForm'



export default function App() {

  
  

  return (
    <div>
     <div className="App">
     <RecoilRoot>
    <Route exact path="/" component={() => <LoginPage />}></Route>
    <Route exact path="/loggedIn" component={SmallSidebar}></Route>
    <Route exact path="/signUp" component={SignUpForm}></Route>
  </RecoilRoot>
      </div>
    </div>
  )
}





  // state = {
  //   current_user: [],
  //   username: "",
  //   loggedIn: false,
  //   password: ""
  // }
  
  // userInputs = (username) => {
  //   console.log(username);
  //   // this.setState({ ...this.state, [event.target.name]: event.target.value });
  //   this.setState({
  //     username: username
  //   })
  // }

  // getUser = (event) => {
  //   event.preventDefault()
  //   let url = "http://localhost:3000/login"
  //   let reqObj = {
  //     method: "GET",
  //     headers: {"Content-Type":"application/json",
  //   Accept:"application/json"},
  //   body: JSON.stringify({
  //     username: this.state.username
  //   })
  //   };

  //   fetch(url, reqObj)
  //   .then(resp => resp.json())
  //   .then(user => console.log(user))
  // }

