import React, { Component } from "react";
import Search from "../presentational/Search";
import Add from "../images/add-circle-outline (1).svg";

export default class BigSidebar extends Component {
  state = {
    searchResult: "",
    result: {},
    chatroomTitle: "",
  };

  componentDidUpdate(prevProps) {
    // console.log(prevProps, this.props);
    if (prevProps.serverId !== this.props.serverId) {
      let url = `http://localhost:3000/servers/${this.props.serverId}`;

      fetch(url)
        .then((resp) => resp.json())
        .then((server) => {
          this.props.loadSelectChatroom(server.chatrooms);
          // console.log("fetch");
        });
    }
  }

  handleOnChange = (event) => {
    event.preventDefault();
    this.setState({ searchResult: event.target.value });
    // console.log(event.target.value);
  };

  search = (event) => {
    event.preventDefault();
    let searchResult = this.state.searchResult;
    let url = "http://localhost:3000/search";
    let reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name: searchResult }),
    };

    fetch(url, reqObj)
      .then((resp) => resp.json())
      .then((server) => this.setState({ result: server }));
  };

  chatroomTitle = (event) => {
    this.setState({
      chatroomTitle: event.target.value,
    });
    // console.log(event.target.value);
  };

  createChatroom = (event) => {
    event.preventDefault();
    let url = "http://localhost:3000/chatrooms";
    let newChatroom = this.state.chatroomTitle;
    let serverId = this.props.serverId;

    let reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ title: newChatroom, server_id: serverId }),
    };

    fetch(url, reqObj)
      .then((resp) => resp.json())
      .then((newChatroom) => this.props.updateChat(newChatroom));
  };

  deleteChat = (event) => {
    event.preventDefault();
    let chatroomId = event.target.value;
    let url = `http://localhost:3000/chatrooms/${chatroomId}`;

    let reqObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    fetch(url, reqObj);
    console.log("deleted");
  };

  render() {
    return (
      <div className="w-64 h-screen mt-8 bg-gray-800 sm:mt-0">
        <div className="flex items-center justify-center mt-10">
          {/* BidSidebar properties */}
          <div class="pt-2 relative mx-auto text-gray-600 searchbar">
            <form onSubmit={(event) => this.search(event)}>
              <div>
                <input
                  onChange={(event) => this.handleOnChange(event)}
                  value={this.state.searchResult}
                  class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Search Servers"
                />
              </div>
              <div>
                <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                  <svg
                    class="text-gray-600 h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    width="512px"
                    height="512px"
                  >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          {/* Search box */}
          <div className="bg-white">
            {/* {this.state.result?.name} */}
            <Search
              result={this.state.result}
              addServerToState={this.props.addServerToState}
            />
          </div>
          {/* Search Results */}
          <div className="chats-div">
            <h1 className="text-xl text-white bg-blue-800">Chatrooms</h1>
          </div>
          {/* Chatroom Div Above and Chatroom Titles Below */}
        </div>
        <span className="mx-4 font-medium">
          {/* {console.log(this.props.selectedChatrooms)} */}
          {this.props.selectedChatrooms?.map((chat) => (
            <nav className="mt-10">
              <a
                className="flex items-center px-8 py-2 text-gray-100 bg-gray-700 border-r-4 border-gray-100"
                href="#"
              >
                <span className="mx-4 font-medium">
                  <div className="chatroom-title">
                    <ul>
                      <li
                        onClick={(event) => this.props.selectChatroom(event)}
                        value={chat.id}
                      >
                        {chat.title}
                      </li>

                      <div className="delete-chatroom">
                        {this.props.currentUser.members.find(
                          (relationship) =>
                            relationship.server_id === this.props.serverId
                        ).admin ? (
                          <li
                            onClick={(event) => this.deleteChat(event)}
                            value={chat.id}
                          >
                            Delete
                          </li>
                        ) : null}
                      </div>
                    </ul>
                  </div>
                </span>
              </a>
            </nav>
          ))}
        </span>
        {/* Create Chatroom Button */}
        <div className="create-chatroom">
          <form>
            <div>
              <input
                onChange={(event) => this.chatroomTitle(event)}
                value={this.state.chatroomTitle}
                class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="chatroom"
                name="chatroom"
                placeholder="New Chatroom"
              />
              <div className="mb-50 create-chatroom">
                <button onClick={(event) => this.createChatroom(event)}>
                  <img src={Add} className="w-10 h-10 mx-auto mb-3" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
