import {React, useState, useEffect} from 'react'
import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom'
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
  
  const [currentuserid, setUser] = useState("false")
  
  function callBack(user){
    setUser(user)
  }

  useEffect(() => {
    setUser(localStorage.getItem("userId"))
  }, [currentuserid])
  
  
  
  return (
    
    <div>
    {/* {console.log(currentuser)} */}
     <div className="App">
     <RecoilRoot>
     <Switch>
    <Route exact path="/">   { currentuserid !== "false" ? <Redirect to="/loggedIn" /> : <LoginPage callBack={callBack} />  }</Route>
    <Route exact path="/loggedIn" >  { currentuserid !== `${currentuserid}` ? <Redirect to="/" /> : <SmallSidebar currentuserid={currentuserid}/>}  </Route>
    {/* <Route path="/loggedIn/messages" component={() => <LoginPage />}></Route> */}
    <Route exact path="/signUp" component={SignUpForm}></Route>
    </Switch>
  </RecoilRoot>
      </div>
    </div>
  )
}

