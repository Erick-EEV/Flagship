import React, { Component } from "react";
import Image from "../images/boatlogo.png";
import BigSidebar from "./BigSidebar";

export default class SmallSidebar extends Component {
  logOut = (event) => {
    event.preventDefault();
    this.props.loadLogOut();
    // console.log(this.props.history)
  };
  render() {
    return (
      <div className="flex flex-row w-24 h-full bg-gray-900">
        <nav class="justify-between flex flex-col">
          <div class="mt-10">
            {/* Home-Button */}
            <div className="home-img">
              <a href="http://localhost:3001/loggedIn">
                <img src={Image} class="rounded-full w-10 h-10 mb-3 mx-auto" />
              </a>
            </div>
            {/* Profile Pic */}
            <div className="profilePic">
              <a href="#">
                <img
                  src={this.props.currentUser.image}
                  class="rounded-full w-10 h-10 mb-3 mx-auto"
                />
              </a>
            </div>
            {/* Server Names */}
            <div class="bg-blue-800 text-white">
              {this.props.currentUser.members?.map((serverUserIsMemberOf) => (
                <div class="mt-5">
                  <ul>
                    <li
                      onClick={(event) => this.props.selectServer(event)}
                      value={serverUserIsMemberOf.server.id}
                    >
                      {serverUserIsMemberOf.server.name}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* LogOut Button */}
          <div className="mb-5">
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
        {/* <div class="big-side-bar">
            {this.props.currentUser.members?.map((serverUserIsMemberOf) => (
              <BigSidebar
                chatrooms={serverUserIsMemberOf.server.chatrooms}
                serverId={this.props.selectedServerId}
              />
            ))}
            <BigSidebar
              memebers={this.props.currentUser.memebers}
              serverId={this.props.selectedServerId}
            />
          </div> */}
      </div>
    );
  }
}
