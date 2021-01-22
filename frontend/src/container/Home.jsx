import React, { Component } from "react";
import SmallSidebar from "./SmallSidebar";
import BigSidebar from './BigSidebar'
import Chatroom from './Chatroom'

export default class Home extends Component {
  state = {
    currentUser: [],
    selectedServerId: 0,
    selectedChatrooms: [],
    selectedChatroomId: 0,
    selectedChatroom: [],
    messages: []
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

  loadSelectChatroom = (server) => {
      this.setState({
        selectedChatrooms: server
      })
  } 


  selectServer = (event) => {
    event.preventDefault();
    this.setState({
      selectedServerId: event.target.value,
    });
  };

  selectChatroom = (event) => {
    this.setState({
      selectedChatroomId: event.target.value,
    });
  };

  render() {
    return (
      <div className="flex flex-row h-screen">
        <SmallSidebar currentUser={this.state.currentUser} selectServer={this.selectServer} history={this.props.history} loadLogOut={this.props.loadLogOut}/>
        <BigSidebar selectedChatrooms={this.state.selectedChatrooms} serverId={this.state.selectedServerId} selectChatroom={this.selectChatroom} loadSelectChatroom={this.loadSelectChatroom} />
        <div className="flex-auto"> <Chatroom selectedChatroomId={this.state.selectedChatroomId}/> </div>
      </div>
    );
  }
}
