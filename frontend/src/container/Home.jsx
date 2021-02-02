import React, { Component } from "react";
import SmallSidebar from "./SmallSidebar";
import BigSidebar from "./BigSidebar";
import Chatroom from "./Chatroom";

export default class Home extends Component {
  state = {
    currentUser: {},
    selectedServerId: 0,
    selectedChatrooms: [],
    selectedChatroomId: 0,
    selectedChatroom: [],
    messages: [],
    newRelationship: [],
    newServer: [],
    adminRes: null,
  };
  componentDidMount() {
    let userurl = `http://localhost:3000/users/${this.props.currentuserid}`;
    fetch(userurl)
      .then((resp) => resp.json())
      .then((user) =>
        this.setState(
          {
            currentUser: user,
          },
          console.log(user)
        )
      );
  }

  loadSelectChatroom = (server) => {
    this.setState({
      selectedChatrooms: server,
    });
  };

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

  setMessages = (message) => {
    this.setState({
      messages: message,
    });
  };

  addServerToState = (relationship) => {
    this.setState({
      newRelationship: relationship,
    });
  };

  updateMessages = (message) => {
    this.setState({
      messages: [...this.state.messages, message],
    });
  };

  updateServers = (newServer) => {
    this.setState({
      newServer: [...this.state.newServer, newServer],
    });
  };

  updateChat = (newchat) => {
    this.setState({
      selectedChatrooms: [...this.state.selectedChatrooms, newchat],
    });
  };

  deletechatMessage = (id) => {
    this.setState({
      messages: this.state.messages.filter((message) => message.id != id),
    });
  };

  render() {
    // console.log(this.state.currentUser);
    return (
      <div className="flex flex-row h-screen">
        <SmallSidebar
          updateServers={this.updateServers}
          currentUser={this.state.currentUser}
          selectServer={this.selectServer}
          history={this.props.history}
          loadLogOut={this.props.loadLogOut}
        />
        <BigSidebar
          currentUser={this.state.currentUser}
          updateChat={this.updateChat}
          selectedChatrooms={this.state.selectedChatrooms}
          serverId={this.state.selectedServerId}
          selectChatroom={this.selectChatroom}
          loadSelectChatroom={this.loadSelectChatroom}
          addServerToState={this.addServerToState}
        />
        <div className="flex-auto">
          {" "}
          <Chatroom
            deletechatMessage={this.deletechatMessage}
            currentUser={this.state.currentUser}
            serverId={this.state.selectedServerId}
            updateMessages={this.updateMessages}
            selectedChatroomId={this.state.selectedChatroomId}
            setMessages={this.setMessages}
            messages={this.state.messages}
          />{" "}
        </div>
      </div>
    );
  }
}
