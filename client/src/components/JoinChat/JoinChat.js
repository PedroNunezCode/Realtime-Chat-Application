import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './JoinChat.css';

const JoinChat = () => {

    const [username, setUsername] = useState("");
    const [chatRoom, setChatRoom] = useState("");

    return (
        <div className="join-chat-container">
            <div className="join-chat-wrapper">
                <h1 className="joinchat-heading">Join Chat Room</h1>
                <div>
                    <input placeholder="" className="join-input" type="text" onChange={(e) => {setUsername(e.target.value)}} />
                </div>
                <div>
                    <input placeholder="" className="join-input mt-20" type="text" onChange={(e) => {setChatRoom(e.target.value)}} />
                </div>
                <Link onClick={e => (!username || !chatRoom ? e.preventDefault() : null)} to={`/chat?username=${username}&chatroom=${chatRoom}`}>
                    <button className="join-button mt-20">Join Chat Room</button> 
                </Link>
            </div>
        </div>
    )
}

export default JoinChat;