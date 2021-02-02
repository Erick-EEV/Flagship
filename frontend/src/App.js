import { React, useState, useEffect } from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import LoginPage from "./container/LoginPage";
import SmallSidebar from "./container/SmallSidebar";
import SignUpForm from "./presentational/SignUpForm";
import Home from "./container/Home";

export default function App() {
  //Returns "No Server With That Name Found" if not found
  // Add Request to be in Server
  //Admin will get notification to add user if yes Create member relationship if no null
  //Admin can Delete a user's member relationship "Remove User"

  //  Update, PATCH request
  // Delete DELETE request
  // Messages Only be able to delete my messages unless admin, Admin can delete all messages

  const [currentuserid, setUser] = useState("false");

  function callBack(user) {
    setUser(user);
  }

  useEffect(() => {
    setUser(localStorage.getItem("userId"));
  }, [currentuserid]);

  const loadLogOut = () => {
    localStorage.setItem("userId", "false");
    setUser("false");
  };

  return (
    <div class="bg-gray-600">
      {/* {console.log(currentuser)} */}
      <div className="App">
        <RecoilRoot>
          <Switch>
            <Route exact path="/">
              {currentuserid !== "false" ? (
                <Redirect to="/loggedIn" />
              ) : (
                <LoginPage callBack={callBack} />
              )}
            </Route>
            {/* <Route exact path="/loggedIn" >  { currentuserid === "false" ? <Redirect to="/" /> : <SmallSidebar currentuserid={currentuserid}/>}  </Route> */}
            <Route exact path="/loggedIn">
              {currentuserid === "false" ? (
                <Redirect to="/" />
              ) : (
                <Home currentuserid={currentuserid} loadLogOut={loadLogOut} />
              )}
            </Route>
            <Route exact path="/signUp">
              {currentuserid !== "false" ? (
                <Redirect to="/loggedIn" />
              ) : (
                <SignUpForm callBack={callBack} />
              )}
            </Route>
            {/* <Route exact path="/signUp" component={SignUpForm}></Route> */}
          </Switch>
        </RecoilRoot>
      </div>
    </div>
  );
}
