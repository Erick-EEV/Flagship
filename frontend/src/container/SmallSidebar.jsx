import React, { Component } from "react";
import Image from "../images/boatlogo.png";
import BigSidebar from "./BigSidebar";

export default class SmallSidebar extends Component {
  state = {
    currentUser: [],
    selectedServerId: 0,
  };
  componentDidMount() {
    let userurl = `http://localhost:3000/users/${this.props.currentuserid}`;
    fetch(userurl)
      .then((resp) => resp.json())
      .then((user) =>
        this.setState({
          currentUser: user,
        })
      );
  }

  logOut = (event) => {
    event.preventDefault();
    localStorage.setItem("userId", "false");
    this.setState({
      currentUser: [],
    });
  };

  selectServer = (event) => {
    event.preventDefault()
    this.setState({
      selectedServerId: event.target.value
    })

  }

  render() {
    return (
      <div>
        <div class="flex flex-row h-full">
          <nav class="bg-gray-900 w-20  justify-between flex flex-col ">
            <div class="mt-10">
              {/* Home-Button */}
              <div className="home-img">
                <a href="#">
                  <img
                    src={Image}
                    class="rounded-full w-10 h-10 mb-3 mx-auto"
                  />
                </a>
              </div>
              {/* Profile Pic */}
              <div className="profilePic">
                <a href="#">
                  <img
                    src={this.state.currentUser.image}
                    class="rounded-full w-10 h-10 mb-3 mx-auto"
                  />
                </a>
              </div>
              {/* Server Names */}
              <div class="bg-blue-800 text-white">
                {this.state.currentUser.members?.map((serverUserIsMemberOf) => (
                  <div class="mt-5" >
                    <ul>
                      <li onClick={(event) => this.selectServer(event)} value={serverUserIsMemberOf.server.id}>{serverUserIsMemberOf.server.name}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* LogOut Button */}
            <div className="mb-20">
              <button
                onClick={(event) => this.logOut(event)}
                type="click"
                class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                LogOut
              </button>
            </div>
          </nav>
          {/* BigSidebar/Chatrooms */}
          <div class="big-side-bar">
            {/* {this.state.currentUser.members?.map((serverUserIsMemberOf) => (
              <BigSidebar chatrooms={serverUserIsMemberOf.server.chatrooms} serverId={this.state.selectedServerId}/>
            ))} */}
            <BigSidebar memebers={this.state.currentUser.memebers} serverId={this.state.selectedServerId}/>
          </div>
        </div>
      </div>
    );
  }
}
