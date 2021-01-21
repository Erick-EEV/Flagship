import React from 'react'

export default function Chatroom(props) {

    return (
        <div class="z-0 ml-10">
            <div>
                
                <div className="messages-div">
                {props.messages?.map((x) => <div><h2>{x.text}</h2></div>)}
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
