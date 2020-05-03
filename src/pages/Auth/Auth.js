import React, {useEffect, useState} from 'react';
import {Link, NavLink, withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import axios from 'axios'
import './Auth.scss'
import {authUser} from "../../redux/actions/authUser"

export const makeId = (length = 30) => {
    let text = "";
    let possible = "abcdefghijklmnopqrstuvwxyz";

    for(let i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

const Auth = ({authUser}) => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [buttonDisable, setButtonDisable] = useState(true)

    useEffect(() => {
        if (!!(name.trim() && password.trim())) {
            setButtonDisable(false)
        } else {
            setButtonDisable(true)
        }
    }, [name, password])

    const changeNameInputHandler = (seter, e) => {
        seter(e.target.value)
    }

    const setUserHandler = (name, password) => {
        authUser(name, password)

    }

    return (
        <div className='auth'>
            <div className='header'>
                <h1 className='header__heading'>Work Chat</h1>
            </div>
            <form className='auth__form'>
                <div className="form-group">
                    <label>Введите ваше имя</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ваше имя"
                        value={name}
                        onChange={(e) => changeNameInputHandler(setName, e)}
                    />
                    <label>Введите ваш пароль</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => changeNameInputHandler(setPassword, e)}
                    />
                </div>
                <Link to='/common'>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={buttonDisable}
                        onClick={() => setUserHandler(name, password)}

                    >
                        Войти
                    </button>
                </Link>

            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        authUser: (name, password) => dispatch(authUser(name, password))
    }
}

export default connect(null, mapDispatchToProps)(Auth)