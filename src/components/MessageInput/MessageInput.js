import React, {useState} from 'react';
import {connect} from "react-redux"
import {createMessage} from "../../redux/actions/createMessage"
import {editMessage} from "../../redux/actions/editMessage"
import axios from "axios"
import {fetchMessages} from "../../redux/actions/fetchMessages"
import {editingMessage} from "../../redux/actions/messageWhichEditing"

const MessageInput = ({url, createMessage, user, editMessage, editingMessage, isEditing, messageWhichEditing}) => {

    const [text, setText] = useState('')

    const ChangeTextHandler = (e) => {
        setText(e.target.value)
    }

    const createMessageHandler = (text) => {
        if (text.trim()) {
            createMessage(text, user, url)
        }

        setText('')
    }

    const editMessageHandler = (text) => {
        editMessage(text, messageWhichEditing, url)
        editingMessage(false)
        setText('')
    }

    const button = (
        isEditing
        ?   <div className="input-group-append">
                <button
                    className="btn btn-outline-secondary"
                    type="submit"
                    onClick={() => editMessageHandler(text)}
                >
                    Отредактировать
                </button>
            </div>
        :   <div className="input-group-append">
                <button
                    className="btn btn-outline-secondary"
                    type="submit"
                    onClick={(e) => createMessageHandler(text)}
                >
                    Отправить
                </button>
            </div>
    )


    return (
        <div className="input-group mb-3 common-chat__input" onSubmit={(e) => createMessageHandler(text)}>
            <input
                type="text"
                className="form-control"
                placeholder="Введите сообщение..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={ChangeTextHandler}
                value={text}
            />
            {button}
        </div>
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