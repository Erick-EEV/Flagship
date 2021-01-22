import React, { Component } from 'react'
import Add from '../images/add-circle-outline (1).svg'

export default class Search extends Component {

    addServer = (event) => {
        let url = "http://localhost:3000/addserver"
        let serverId = this.props.result.id
        let userId = localStorage.getItem("userId")

        let reqObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({ server_id: serverId, user_id: userId, admin: false }),
          };

          fetch(url, reqObj)
          .then(resp => resp.json())
          .then(memberRelationship => this.props.addServerToState(memberRelationship))
        //   I tried to use this addServerToState to get the page to refresh when added but it doesnt seem to work 
          
    }

    
    render() {
        // console.log(this.props.result.name);
        return (
            <div>
                <div>
                {/* <input value={this.props.result.name}/> */}
                <h1 class="text-xl text-white bg-blue-800">{this.props.result.name}</h1>
                </div>
                <div className="bg-blue-800 add-button">
                <button onClick={(event) => this.addServer(event)} ><img src={Add} className="w-10 h-10 mx-auto mb-3 rounded-full"/></button>
                </div>
            </div>
        )
    }
}
