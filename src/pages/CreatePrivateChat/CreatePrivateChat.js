import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {createPrivateChat} from "../../redux/actions/createPrivateChat"
import {connect} from "react-redux"

const CreatePrivateChat = ({user, createPrivateChat}) => {
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

    const createChatHandler = () => {
        createPrivateChat(chatName, chatPassword, user)
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
                        onClick={createChatHandler}

                    >
                        Создать чат
                    </button>
                </Link>

            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPrivateChat: (name, password, author) => dispatch(createPrivateChat(name, password, author))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePrivateChat);