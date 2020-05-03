import React from 'react';
import {connect} from 'react-redux'
import './PrivateChat.scss'
import {Link} from "react-router-dom"

const PrivateChat = ({chatData}) => {
    return (
        <Link to={`/private/${chatData.privateId}`}>
            <li className='private-chat'>
                <div>
                    <h6 className='private-chat__name'>{chatData.name}</h6>
                </div>
                {
                    // user.id === message.author_id
                    //     ? <div className='message__buttons'>
                    //         <button onClick={() => editMessageHandler(message)}>Редактировать</button>
                    //         <button onClick={() => removeMessageHandler(message)}>Удалить</button>
                    //     </div>
                    //     : null
                }
            </li>
        </Link>

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