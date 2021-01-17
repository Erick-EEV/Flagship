import React, { Component } from 'react'
import Image from '../images/boatlogo.png'

export default class Logo extends Component {
    render() {
        return (
            <div className="">
                <img className="logo-init-page" src={Image}/>
            </div>
        )
    }
}
