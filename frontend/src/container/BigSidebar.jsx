import React, { Component } from "react";
import Chatroom from './Chatroom'

export default class BigSidebar extends Component {

  state = {
    chatrooms: [],
    firstChatroom: []
  }

  componentDidMount(){
    let url = "http://localhost:3000/chatrooms"
    fetch(url)
    .then(resp => resp.json())
    .then(chatroomsArr => this.setState({
      chatrooms: chatroomsArr
    }))

    let videogameurl = "http://localhost:3000/chatrooms/1"
    fetch(videogameurl)
    .then(resp => resp.json())
    .then( firstchat => this.setState({firstChatroom: firstchat}))
  }
  
  render() {
    console.log(this.props.firstchatroom);
    return (
        <div className="w-64 h-screen mt-8 bg-gray-800 sm:mt-0">
              <div className="flex items-center justify-center mt-10">
             <div className="friends-div">
                 <h1 className="text-xl bg-gray-100">Chatrooms</h1>
             </div>
        </div>
                {/* little icon */}
                  {/* <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg> */}
                  
                  <span className="mx-4 font-medium">{this.state.chatrooms.map((chatroom) => <nav className="mt-10"> <a className="flex items-center px-8 py-2 text-gray-100 bg-gray-700 border-r-4 border-gray-100"
                  href="#"> <span className="mx-4 font-medium"> <div> {chatroom.title}</div> </span> </a> </nav>)}</span>

                  
              <div className="absolute bottom-0 my-10">
              
              </div>
<div className="chatroom-div">
  <Chatroom videoGameChatroom={this.state.firstChatroom}/>
</div>
</div>
            );
          }
}
