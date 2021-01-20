import React from 'react'


export default function RenderMessage(props) {
    return (
        <div>
        <ul>
        <li>{props.messages?.map((message) => <h2>{message.text}</h2> )}</li>
            </ul>
        </div>
    )
}
