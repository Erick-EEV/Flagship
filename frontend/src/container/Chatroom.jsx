import React, { Component } from "react";
import Logo from "./Logo";

export default class Chatroom extends Component {
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
            <form>
              <div>
                <input
                  placeholder="message"
                  id="message"
                  type="message"
                ></input>
              </div>
              <div className="submit-button">
                <button
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
