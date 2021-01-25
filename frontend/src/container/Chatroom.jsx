import React, { Component } from "react";
import Logo from "./Logo";

export default class Chatroom extends Component {


  state = {
    newMessage: "",
    messageObj: {}
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.selectedChatroomId !== this.props.selectedChatroomId) {
      let url = `http://localhost:3000/chatrooms/${this.props.selectedChatroomId}`;

      fetch(url)
        .then((resp) => resp.json())
        .then((chatroom) => {
            this.props.setMessages(chatroom.messages)
        });
    }
  }
  handleOnChange(event){
    event.preventDefault();
    this.setState({ newMessage: event.target.value });
    // console.log(event.target.value);
  }

  createMessage(event){
    event.preventDefault();
    let url = "http://localhost:3000/messages"
    let newMessage = this.state.newMessage
    let userId = localStorage.getItem("userId")
    let username = localStorage.getItem("username")
    let chatroomId = this.props.selectedChatroomId

    let reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user_id: userId, text: newMessage, chatroom_id: chatroomId, owner: username}),
    };

    fetch(url, reqObj)
    .then(resp => resp.json())
    .then(message => this.props.updateMessages(message))

  }

  
  render() {
    return (
      <div class="z-0 ml-10 chatroom-div">
            <div className="logo">
          <Logo />
          </div>
        <div>
          {/* Message */}
          <div className="messages-div">
            {this.props.messages?.map((message) => (
              <div>
                <div>
                  <h6>{message.owner ? message.owner : null}</h6>
                </div>
                <h2>{message.text ? message.text : null}</h2>
              </div>
            ))}
          </div>
          {/* New Message form */}
          <div>
            <form onSubmit={(event) => this.createMessage(event)}>
              <div>
                <input
                onChange={(event) => this.handleOnChange(event)}
                  placeholder="Enter Message"
                  id="message"
                  type="message"
                ></input>
              </div>
              <div className="submit-button">
                <button
                type="submit"
                  placeholder="Submit"
                  class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
