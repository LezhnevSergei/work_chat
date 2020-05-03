import React from 'react'
import {connect} from 'react-redux'
import './CommonChat.scss'
import Chat from "../../components/Chat/Chat"

const CommonChat = () => {
    return (
        <div>
            <Chat/>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         state
//     }
// }
//
// const mapDispatchToProps = {
//
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CommonChat)
export default (CommonChat)