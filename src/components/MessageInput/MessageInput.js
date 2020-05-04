import React, {useState} from 'react';
import {connect} from "react-redux"
import {createMessage} from "../../redux/actions/createMessage"
import {editMessage} from "../../redux/actions/editMessage"
import {fetchMessages} from "../../redux/actions/fetchMessages"
import {editingMessage} from "../../redux/actions/messageWhichEditing"
import './MessageInput.scss'

const MessageInput = ({url, createMessage, user, editMessage, editingMessage, isEditing, messageWhichEditing}) => {

    const [text, setText] = useState('')

    const ChangeTextHandler = (e) => {
        setText(e.target.value)
    }

    const createMessageHandler = (text, e) => {
        e.preventDefault()
        if (text.trim()) {
            createMessage(text, user, url)
        }

        setText('')
    }

    const editMessageHandler = (text, e) => {
        e.preventDefault()
        editMessage(text, messageWhichEditing, url)
        editingMessage(false)
        setText('')
    }

    const button = (
        isEditing
        ?   <button
                className="message-input__button"
                type="submit"
                onClick={(e) => editMessageHandler(text, e)}
            >
                Отредактировать
            </button>
        :   <button
                className="message-input__button"
                type="submit"
                onClick={(e) => createMessageHandler(text, e)}
            >
                Отправить
            </button>

    )

    return (
        <form className='message-input__from'>
            <input
                className='message-input__input'
                type="text"
                value={text}
                onChange={ChangeTextHandler}
            />
            {button}
        </form>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        isEditing: state.messagesReducer.isEditing,
        messageWhichEditing: state.messagesReducer.messageWhichEditing
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createMessage: (text, user, url) => dispatch(createMessage(text, user, url)),
        editMessage: (text, message, url) => dispatch(editMessage(text, message, url)),
        fetchMessages: () => dispatch(fetchMessages()),
        editingMessage: (isEditing) => dispatch(editingMessage(isEditing))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);