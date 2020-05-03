import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom";
import { makeId } from '../Auth/Auth';

const CreatePrivateChat = () => {

    const [chatName, setChatName] = useState('')
    const [chatPassword, setChatPassword] = useState('')
    const [buttonDisable, setButtonDisable] = useState(true)

    useEffect(() => {
        if (!!(chatName.trim() && chatPassword.trim())) {
            setButtonDisable(false)
        } else {
            setButtonDisable(true)
        }
    }, [chatName, chatPassword])

    const changeInputHandler = (seter, event) => {
        seter(event.target.value)
    }

    const createChatHandler = (chatName, chatPassword) => {
        const chat = {
            name: chatName,
            password: chatPassword,
            privateId: makeId()
        }

        axios.post(`https://working-chat.firebaseio.com/private-chats/${chat.privateId}.json`, chat)
    }


    return (
        <div className='auth'>
            <form className='auth__form'>
                <div className="form-group">
                    <label>Введите название чата</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Имя чата"
                        value={chatName}
                        onChange={(e) => changeInputHandler(setChatName, e)}
                    />
                    <label>Введите пароль</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Пароль"
                        value={chatPassword}
                        onChange={(e) => changeInputHandler(setChatPassword, e)}
                    />
                </div>
                <Link to='/common'>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={buttonDisable}
                        onClick={() => createChatHandler(chatName, chatPassword)}

                    >
                        Создать чат
                    </button>
                </Link>

            </form>
        </div>
    );
};

export default CreatePrivateChat;