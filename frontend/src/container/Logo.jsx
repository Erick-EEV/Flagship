import React, { Component } from 'react'
import Image from '../images/boatlogo.png'


export default class Logo extends Component {
    render() {
        return (
            <div class="right-20">
                <img className="logo-init-page" src={Image}/>
            </div>
        )
    }
}
