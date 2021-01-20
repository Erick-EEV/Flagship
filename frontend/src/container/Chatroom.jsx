import React from 'react'
import RenderMessage from '../presentational/RenderMessage'
import {userS, usernameState } from '../Recoil'
import {useRecoilValue} from 'recoil'

export default function Chatroom(props) {
    // const x = useRecoilValue(usernameState)
    // console.log(x);
    console.log(props.chatrooms)
    return (
        <div class="z-0 ml-10">
            <div>
                
                <div className="messages-div">
        {props.chatrooms?.map((chat) => <RenderMessage messages={chat.messages} /> )}
                </div>
                {/* message form */}
                <div>
                    <form>
                        <div>
                            <input placeholder="message" id="message" type="message">
                                
                            </input>
                            <div >
                                <button placeholder="Submit" class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
  	</div>
    )
}
