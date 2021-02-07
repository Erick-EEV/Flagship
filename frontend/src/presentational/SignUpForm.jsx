import React, { Component } from "react";
import { Link } from "react-router-dom";
import { atom, useRecoilState } from "recoil";

export default class SignUpForm extends Component {
  
  state = {
    username: "",
    password: "",
    image: "",
    current_user: {},
  };



  handleOnSubmit = (event) => {
    event.preventDefault();
    let url = "http://localhost:3000/signUp";
    let reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        image: this.state.image,
      }),
    };
    fetch(url, reqObj)
      .then((response) => response.json())
      .then((user) => this.props.callBack(user));
  };

  inputs = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  render() {
    return (
      <div>
        <div class="bg-grey-lighter min-h-screen flex flex-col">
          <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 class="mb-8 text-3xl text-center">Sign up</h1>
              <form onSubmit={(event) => this.handleOnSubmit(event)}>
                <input
                  type="text"
                  class="block border border-grey-light w-full p-3 rounded mb-4"
                  name="username"
                  value={this.state.username}
                  placeholder="Full Name"
                  onChange={(event) => this.inputs(event)}
                />
                <input
                  type="password"
                  class="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={(event) => this.inputs(event)}
                />
                <input
                  type="profilepic"
                  class="block border border-grey-light w-full p-3 rounded mb-4"
                  name="image"
                  value={this.state.image}
                  placeholder="Profile Pic"
                  onChange={(event) => this.inputs(event)}
                />
                {/* <Link to="/loggedIn"> */}
                <button
                  type="submit"
                  class="w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"
                >
                  Create Account
                </button>
                {/* </Link> */}
              </form>
              <div class="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the
                <a
                  class="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Terms of Service
                </a>{" "}
                and
                <a
                  class="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div class="text-grey-dark mt-6">
              Already have an account?
              <a class="no-underline border-b border-blue text-blue" href="/">
                Log in
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    );
  }
}
