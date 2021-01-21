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

  // Some how move messages to be layered over the background logo to the right of the screen
//Create an onClick event for each server name and when clicked places that server into selected_server state
  //Then take that selected server and pass it as a prop to BigSidebar and render only that servers chatrooms
    //Then pass that chatrooms.messages as props to Chatroom to be rendered
//Create Search bar above Chatrooms that finds a SERVER by NAME
  //Returns "No Server With That Name Found" if not found
    // Add Server/Request to be in Server
    //Admin will get notification to add user if yes Create member relationship if no null
    //Admin can Delete a user's member relationship "Remove User"
//Create, POST request
//  Update, PATCH request
// Delete DELETE request
// Messages Only be able to delete my messages unless admin, Admin can delete all messages
  
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

