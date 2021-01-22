import React, { useState } from "react";
import { FaBeer } from "react-icons/fa";
import Image from "../images/boatlogo.png";
import { useHistory } from "react-router-dom";
import { useRecoilState, atom } from "recoil";
import { usernameState } from "../Recoil";

export default function LoginForm(props) {
  const [current_username, setUsername] = useRecoilState(usernameState);
  const history = useHistory();
  const onChange = (event) => {
    setUsername(event.target.value);
  };

  const logIn = (event) => {
    event.preventDefault();
    let url = "http://localhost:3000/login";
    let reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ username: current_username }),
    };

    fetch(url, reqObj)
      .then((resp) => resp.json())
      .then((user) => {
        localStorage.setItem("userId", user.id);
        localStorage.setItem("username", user.username);
        props.callBack(user.id);
      });
  };

  return (
    <div>
      <div class="max-w-lg max-w-xs bg-blue-900 shadow-2xl rounded-lg mx-auto text-center py-12 mt-4 rounded-xl">
        <img src={Image} width="200" height="100" className="login-logo" />
        <div className="welcome-flagship">
          <h1 class="text-gray-200 text-center font-extrabold -mt-3 text-3xl">
            Welcome to Flagship
          </h1>
        </div>
        <div class="container py-5 max-w-md mx-auto">
          <form method="" action="" onSubmit={(event) => logIn(event)}>
            <div class="mb-4">
              <input
                placeholder="Username"
                class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                value={current_username}
                onChange={onChange}
              />
            </div>
            <div class="mb-6">
              <input
                placeholder="Password"
                class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                value={null}
                onChange={null}
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <a
                class="inline-block align-baseline font-bold text-sm text-gray-400 "
                href="/signUp"
              >
                Register
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
