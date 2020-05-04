import React from 'react'
import './CommonChat.scss'
import Chat from "../../components/Chat/Chat"

const CommonChat = () => {
    return (
        <div>
            <Chat url={'https://working-chat.firebaseio.com/messages'}/>
        </div>
    )
}

export default (CommonChat)