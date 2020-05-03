import React from 'react'
import {connect} from 'react-redux'
import './Chat.scss'
import MessageList from "../MessageList/MessageList"
import MessageInput from "../MessageInput/MessageInput"

const Chat = () => {
    return (
        <div>
            <MessageList />
            <MessageInput/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)