import React from 'react'
import Logo from './Logo'
import RenderMessage from '../presentational/RenderMessage'

export default function Chatroom(props) {
    // console.log(props.chatrooms)
    return (
        <div>
            <div>
        {props.chatrooms?.map((chat) => <RenderMessage messages={chat.messages} /> )}
                <Logo/>
            </div>
  	</div>
    )
}
