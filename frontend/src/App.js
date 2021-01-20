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
import {userS} from './Recoil'



import LoginPage from './container/LoginPage'
import SmallSidebar from './container/SmallSidebar'
import SignUpForm from './presentational/SignUpForm'



export default function App() {

  
  return (
    
    <div>
     <div className="App">
     <RecoilRoot>
    <Route exact path="/" component={() => <LoginPage />}></Route>
    <Route exact path="/loggedIn" component={() => <SmallSidebar user={userS}/> }></Route>
    <Route exact path="/signUp" component={SignUpForm}></Route>
  </RecoilRoot>
      </div>
    </div>
  )
}

