import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        console.log(this.props.result.name);
        return (
            <div>
                <h1 class="text-xl text-white bg-blue-800">{this.props.result.name}</h1>
            </div>
        )
    }
}
