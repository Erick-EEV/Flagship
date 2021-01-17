import React, { Component } from 'react'
import LoginForm from '../presentational/LoginForm'

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <LoginForm userInputs={this.props.userInputs} getUser={this.props.getUser}/>
            </div>
        )
    }
}
