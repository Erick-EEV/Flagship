import React, { Component } from "react";
import Logo from "./Logo";

export default class Chatroom extends Component {
  state = {
    newMessage: "",
    messageObj: {},
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selectedChatroomId !== this.props.selectedChatroomId) {
      let url = `http://localhost:3000/chatrooms/${this.props.selectedChatroomId}`;

      fetch(url)
        .then((resp) => resp.json())
        .then((chatroom) => {
          this.props.setMessages(chatroom.messages);
        });
    }
  }
  handleOnChange(event) {
    event.preventDefault();
    this.setState({ newMessage: event.target.value });
    // console.log(event.target.value);
  }

  createMessage(event) {
    event.preventDefault();
    let url = "http://localhost:3000/messages";
    let newMessage = this.state.newMessage;
    let userId = localStorage.getItem("userId");
    let username = localStorage.getItem("username");
    let chatroomId = this.props.selectedChatroomId;

    let reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        text: newMessage,
        chatroom_id: chatroomId,
        owner: username,
      }),
    };

    fetch(url, reqObj)
      .then((resp) => resp.json())
      .then((message) => this.props.updateMessages(message));
  }

  deleteMessage = (event) => {
    event.preventDefault()
    let messageId = event.target.value;
    let url = `http://localhost:3000/messages/${messageId}`;

    let reqObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    };

    fetch(url, reqObj);
    this.props.deletechatMessage(messageId)
    // console.log(event.target.value);
    console.log("deleted");
  }
  render() {
    return (
  <div class="ml-10 chatroom-div">
          {/* Message */}
      <div className=" messages-div">
            {this.props.messages?.map((message) => (
        <div>
                <div className="w-full ">
                  <h6 className="font-bold text-blue-400">{message.owner ? message.owner : null}</h6>
                <h2 className="font-bold text-white">{message.text ? message.text : null}</h2>
                </div>
                <div className="delete-message">
                        {this.props.currentUser.members.find(
                          (relationship) =>
                            relationship.server_id === this.props.serverId
                        ).admin ? (
                          <ul>
                          <li
                          classname="font-bold"
                            onClick={(event) => this.deleteMessage(event)}
                            style={{textDecoration: "none"}}
                            value={message.id}
                          >
                            X
                          </li>
                          </ul>
                        ) : null}
                      </div>
              </div>
            ))}
     
          {/* New Message form */}
          {this.props.selectedChatroomId != 0 ? 
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
            </div> : null} 
      </div>
  </div>
      
    );
  }
}
