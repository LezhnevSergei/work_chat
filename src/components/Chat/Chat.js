import React, {useEffect} from 'react'
import './Chat.scss'
import MessageList from '../MessageList/MessageList'
import MessageInput from '../MessageInput/MessageInput'
import {withRouter} from "react-router-dom"

const Chat = ({url = 'https://working-chat.firebaseio.com/private-chats', match}) => {
    let newUrl = url
    if (match.params.privateId) {
        newUrl = url + `/${match.params.privateId}/messages`
    }

    return (
        <div>
            <MessageList url={newUrl} />
            <MessageInput url={newUrl}/>
        </div>
    )
}

export default withRouter(Chat)