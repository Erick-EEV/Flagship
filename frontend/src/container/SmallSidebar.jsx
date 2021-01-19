import React, { Component } from 'react'
import Image from '../images/boatlogo.png'
import BigSidebar from './BigSidebar'
import {loggedInUser, usernameState} from '../Recoil'


export default class SmallSidebar extends Component {

  state = {
    server: [],
    selectedServer: []
  }

  componentDidMount(){
    let url = "http://localhost:3000/servers/1"
    fetch(url)
    .then(response => response.json())
    .then(serverArr => this.setState({server: serverArr}))
  }

  
    render() {
      // console.log(this.state.server.chatrooms);
        return (
            <div>
<div class="flex flex-row h-full">
       
      <nav class="bg-gray-900 w-20  justify-between flex flex-col ">
          <div class="mt-10">
                {/* server-circles */}
                <div className="home-img">
            <a href="#">
              <img src={Image} class="rounded-full w-10 h-10 mb-3 mx-auto"/>
            </a>
            </div>
            
          <div class="bg-gray-50">
          {this.state.server.name}
      {/* {this.state.server.map((server) => <div>{server.name}</div>)} */}
          </div>
  
            </div>
      </nav>
      <div class="big-side-bar">
            <BigSidebar chatrooms={this.state.server.chatrooms}/>
                  </div>
    </div>
            </div>
        )
    }
}
