import React, { Component } from "react";
import Chatroom from './Chatroom'
import Logo from './Logo'

export default class BigSidebar extends Component {

  state = {
    selected_chatroom: [],
  }

  
  render() {
    return (
      <div className="w-64 h-screen mt-8 bg-gray-800 sm:mt-0">
              <div className="flex items-center justify-center mt-10">
             <div className="friends-div">
                 <h1 className="text-xl bg-gray-100">Chatrooms</h1>
             </div>
        </div>
                    <span className="mx-4 font-medium">{this.props.chatrooms?.map((chat) => <nav className="mt-10"> <a className="flex items-center px-8 py-2 text-gray-100 bg-gray-700 border-r-4 border-gray-100"
                  href="#"> <span className="mx-4 font-medium"> <div> {chat.title}</div> </span> </a> </nav>)}</span>
                  
              <div className="absolute bottom-0 my-10">
              
              </div>
              <div className="logo">
              <Logo/>
              </div>
<div className="chatroom-div">
  <Chatroom chatrooms={this.props.chatrooms}/>
</div>
</div>
            );
          }
        }
        
        // componentDidMount(){
        //   let url = "http://localhost:3000/chatrooms"
        //   fetch(url)
        //   .then(resp => resp.json())
        //   .then(chatroomsArr => this.setState({
        //     chatrooms: chatroomsArr
        //   }))
      
        //   let videogameurl = "http://localhost:3000/chatrooms/1"
        //   fetch(videogameurl)
        //   .then(resp => resp.json())
        //   .then( firstchat => this.setState({firstChatroom: firstchat}))
        // }