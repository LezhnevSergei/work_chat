import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import './Chat.scss'
import MessageList from "../MessageList/MessageList"
import MessageInput from "../MessageInput/MessageInput"
import {withRouter} from "react-router-dom"

const Chat = ({url = 'https://working-chat.firebaseio.com/private-chats', match}) => {
    let newUrl = url
    if(match.params.privateId) {
        newUrl = url + `/${match.params.privateId}/messages`
    }

    return (
        <div>
            <MessageList url={newUrl} />
            <MessageInput url={newUrl}/>
        </div>
    )
}
//
// const mapStateToProps = (state) => {
//     return {}
// }
//
// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(Chat)
export default withRouter(Chat)