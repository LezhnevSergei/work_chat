import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import './MessageList.scss'
import Message from "../Message/Message"
import Loader from "../Loader/Loader"
import {fetchMessages} from "../../redux/actions/fetchMessages"

export const scrollDown = async () => {
    if (document.getElementById('chat-window')) {
        const chatWindow = await document.getElementById('chat-window')
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}

const MessageList = ({messages, fetchMessages, loading, isEditing}) => {

    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        fetchMessages()
        setIsReady(true)

    }, [])

    const chatWindow = (
        <ul className='common-chat__list'>
            {messages.map(msg => <Message message={msg} key={msg.publish_date} />)}
        </ul>
    )

    const render = (isReady) => {
        return (
             isReady
             ?  loading
                ?   <Loader/>
                :   messages.length
                    ?   chatWindow
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
        loading: state.messagesReducer.loading,
        isEditing: state.messagesReducer.isEditing
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMessages: () => dispatch(fetchMessages())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);