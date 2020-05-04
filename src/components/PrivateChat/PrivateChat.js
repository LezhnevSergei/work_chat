import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import './PrivateChat.scss'
import {Link} from "react-router-dom"

const PrivateChat = ({chatData}) => {
    const [passwordInput, setPasswordInput] = useState('')
    const [success,setSuccess] = useState(true)

    useEffect(() => {
        if (chatData.password === passwordInput)
            setSuccess(false)
        else {
            setSuccess(true)
        }
    }, [passwordInput])


    return (
        <li className='private-chat'>
            <div className='private-chat__room'>
                <h6 className='room__name'>{chatData.name}</h6>
                <form className='room__form'>
                    <input
                        type="text"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                    />
                    <Link to={`/private/${chatData.privateId}`}>
                        <button
                            // onClick={successHandler}
                            disabled={success}
                        >
                            Войти
                        </button>
                    </Link>
                </form>
            </div>
        </li>

    );
};

//const mapStateToProps = (state) => {
//return {
//
//}
//}

//const mapDispatchToProps = (dispatch) => {
//return {
//
//}
//}

//export default connect(mapStateToProps, mapDispatchToProps)(PrivateChat);
export default PrivateChat;