import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import './PrivateChats.scss'
import {Link} from "react-router-dom"
import {fetchPrivateChats} from "../../redux/actions/fetchPrivateChats"
import Loader from "../../components/Loader/Loader"
import PrivateChat from "../../components/PrivateChat/PrivateChat"

const PrivateChats = ({privateChats, fetchPrivateChats, isLoading}) => {
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        fetchPrivateChats()
        setIsReady(true)
    }, [])

    const privateChatsList = (privateChats) => {
        return (
            <ul className='common-chat__list'>
                {privateChats.reverse().map(chat => <PrivateChat chatData={chat} key={chat.privateId}/>)}
            </ul>
        )
    }

    const render = (isReady) => {
        return (
            isReady
            ?   isLoading
                ?   <Loader/>
                :   privateChats.length
                    ?   privateChatsList(privateChats)
                    :   <p className='empty-message'>Приватных чатов ещё нет!</p>

            :   null
        )
    }

    return (
        <div className='chat'>
            <Link to='/create-private-chat' className='create-chat__button'>
                <button className='btn btn-primary'>
                    Создать приватный чат
                </button>
            </Link>
            <div id='chat-window'>
                {render(isReady)}
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        privateChats: state.privateChatsReducer.privateChats,
        isLoading: state.privateChatsReducer.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPrivateChats: () => dispatch(fetchPrivateChats())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateChats)