import React from 'react'
import Logo from './Logo'
import RenderMessage from '../presentational/RenderMessage'

export default function Chatroom(props) {
    let messages = props.videoGameChatroom.messages
    console.log(messages)
    // messages.map((message) => message)
    return (
        <div>
            <div>
                <Logo/>
            {/* {props.videoGameChatroom.messages.map((message) => <RenderMessage message={message}/> )} */}
            </div>
  	</div>
    )
}
