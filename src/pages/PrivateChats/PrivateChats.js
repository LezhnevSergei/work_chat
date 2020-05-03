import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import './PrivateChats.scss'
import {Link} from "react-router-dom"
import {fetchPrivateChats} from "../../redux/actions/fetchPrivateChats"

const PrivateChats = ({fetchPrivateChats}) => {

    useEffect(() => {
        fetchPrivateChats()
    }, [])

    return (
        <div>
            <h1>PrivateChats</h1>
            <Link to='/private/create-chat'>Создать приватный чат</Link>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         state
//     }
// }
//
const mapDispatchToProps = dispatch => {
    return {
        fetchPrivateChats: () => dispatch(fetchPrivateChats())
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(CommonChat)
export default connect(null, mapDispatchToProps)(PrivateChats)