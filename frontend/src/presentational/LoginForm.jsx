import React, { Component } from "react";
import { FaBeer } from 'react-icons/fa'
import Image from '../images/boatlogo.png'
import {Link} from 'react-router-dom'

export default class LoginForm extends Component {



  render() {
    return (
      <div>
      <div class="max-w-lg max-w-xs bg-blue-900 shadow-2xl rounded-lg mx-auto text-center py-12 mt-4 rounded-xl">
      <img src={Image} width="200" height="100" className="login-logo"/>
      <div className="welcome-flagship">
        <h1 class="text-gray-200 text-center font-extrabold -mt-3 text-3xl">Welcome to Flagship</h1>
        </div>
        <div class="container py-5 max-w-md mx-auto">
            <form method="" action="" onSubmit={event => this.props.getUser(event)}>
                <div class="mb-4">
                    <input placeholder="Username"
                        class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" name="username" onChange={(event) => this.props.userInputs(event.target.value)}/>
                </div>
                <div class="mb-6">

                    <input placeholder="Password"
                        class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" name="password"  onChange={null}/>

                </div>
                <div class="flex items-center justify-between">
                    {/* <Link to="/loggedIn"> */}
                    <button
                        class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button" >
                        Sign In
                    </button>
                    {/* </Link> */}
                    <a class="inline-block align-baseline font-bold text-sm text-gray-400 " href="/signUp">
                    Register
                    </a>
                </div>
            </form>
        </div>
    </div>
      {/* <h1>Hello World <FaBeer /> </h1> */}
        {/* <div className="grid min-h-screen grid-cols-4 gap-3 bg-blue-300">
          <div className="row-span-2 p-3 bg-red-200 rounded">1</div>
          <div className="p-3 bg-green-300 rounded">2</div>
          <div className="p-3 bg-yellow-100 rounded">3</div>
          <div className="row-span-2 p-3 bg-red-200 rounded">4</div>
          <div className="p-3 bg-white rounded">5</div>
          <div className="p-3 bg-blue-500 rounded">6</div>
        </div> */}
      </div>
    );
  }
}
