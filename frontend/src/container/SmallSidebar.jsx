import React, { Component } from 'react'
import Image from '../images/boatlogo.png'
import BigSidebar from './BigSidebar'
import {loggedInUser, usernameState} from '../Recoil'



export default class SmallSidebar extends Component {

  state = {
    currentUser: [],
    server: [],
    selectedServer: []
  }
  componentDidMount(){
    let url = "http://localhost:3000/servers/1"
    fetch(url)
    .then(response => response.json())
    .then(serverArr => this.setState({server: serverArr}))
    
    let userurl = `http://localhost:3000/users/${this.props.currentuserid}`
    fetch(userurl)
    .then(resp => resp.json())
    .then(user => this.setState({
      currentUser: user
    }))
    
  }
  
  
  render() {

      // console.log(this.props.currentuser);
      console.log(this.state.currentUser);

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

            <div className="profilePic">
            <a href="#">
              <img src={this.state.currentUser.image} class="rounded-full w-10 h-10 mb-3 mx-auto"/>
            </a>
            </div>
            
          <div class="bg-gray-50">
          {/* {this.state.erick?.map((x) => console.log(x))} */}
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
