import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import './MessageList.scss'
import Message from "../Message/Message"
import Loader from "../Loader/Loader"
import {fetchMessages} from "../../redux/actions/fetchMessages"

export const scrollDown = () => {
    if (document.getElementById('chat-window')) {
        const chatWindow = document.getElementById('chat-window')
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}

const MessageList = ({url, messages, fetchMessages, loading}) => {

    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        fetchMessages(url)
        setIsReady(true)

    }, [])

    const chatWindow = (messages) => {
        return (
            <ul className='common-chat__list'>
                {messages.map(msg => <Message message={msg} url={url} key={msg.publish_date} />)}
            </ul>
        )
    }

    const render = (isReady) => {
        return (
             isReady
             ?  loading
                ?   <Loader/>
                :   messages.length
                    ?   chatWindow(messages)
                    :   <p className='empty-message'>Сообщений ещё нет, стань первым!</p>
             :  null
        )
    }

    return (
        <div className='chat'>
            <div id='chat-window'>
                {render(isReady)}
            </div>
        </div>

    )

}

const mapStateToProps = (state) => {
    return {
        messages: state.messagesReducer.messages,
        loading: state.messagesReducer.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMessages: (url) => dispatch(fetchMessages(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);