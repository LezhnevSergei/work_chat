import React, {useEffect} from 'react';
import './Message.scss'
import {connect} from "react-redux"
import {removeMessage} from "../../redux/actions/removeMessage"
import {fetchMessages} from "../../redux/actions/fetchMessages"
import {getUser} from "../../redux/actions/getUser"
import {editingMessage, messageWhichEditing} from "../../redux/actions/messageWhichEditing"

const Message = ({message, user, url, removeMessage, editingMessage, isEditing, messageWhichEditing}) => {

    console.log(url)
    const editMessageHandler = (message) => {
        messageWhichEditing(message)

        if (isEditing) {
            editingMessage(false)
        }
    }

    const removeMessageHandler = (message) => {
        removeMessage(url, message)
    }

    return (
        <li className='private-chat'>
            <div>
                <h6 className='private-chat__name'>{message.author}</h6>
                <p className='message__text'>{message.text}</p>
                <small className='message__publish-date'>{message.publish_date}</small>
            </div>
            {
                user.id === message.author_id
                ?   <div className='message__buttons'>
                        <button onClick={() => editMessageHandler(message)}>Редактировать</button>
                        <button onClick={() => removeMessageHandler(message)}>Удалить</button>
                    </div>
                :   null
            }
        </li>
    );
};

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        isEditing: state.messagesReducer.isEditing
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeMessage: (url, message) => dispatch(removeMessage(url, message)),
        fetchMessages: () => dispatch(fetchMessages),
        getUser: () => dispatch(getUser()),
        messageWhichEditing: (message) => dispatch(messageWhichEditing(message)),
        editingMessage: (isEditing) => dispatch(editingMessage(isEditing))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);