import React, { Component } from 'react'
import LoginForm from '../presentational/LoginForm'

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <LoginForm logIn={this.props.logIn} submitCallBack={this.props.submitCallBack}/>
            </div>
        )
    }
}
