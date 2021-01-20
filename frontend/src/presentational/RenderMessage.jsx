import React from 'react'


export default function RenderMessage(props) {
    return (
        <div>
            {props.messages?.map((message) => <div><h2>{message.text}</h2></div> )}
        </div>
    )
}
