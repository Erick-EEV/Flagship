import React from 'react'
// import Logo from './Logo'
import RenderMessage from '../presentational/RenderMessage'
import {userS, usernameState } from '../Recoil'
import {useRecoilValue} from 'recoil'

export default function Chatroom(props) {
    const x = useRecoilValue(usernameState)
    console.log(x);
    // console.log(props.chatrooms)
    return (
        <div>
            <div>
                
                <div className="messages-div">
        {props.chatrooms?.map((chat) => <RenderMessage messages={chat.messages} /> )}
                </div>
            </div>
  	</div>
    )
}
