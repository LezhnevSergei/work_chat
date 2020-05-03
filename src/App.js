import React, {useEffect} from 'react';
import Header from "./components/Header/Header"
import {Route} from "react-router-dom"
import CommonChat from '../src/pages/CommonChat/CommonChat'
import PrivateChats from "./pages/PrivateChats/PrivateChats"
import {Redirect} from "react-router-dom"
import Auth from "./pages/Auth/Auth"
import {connect} from "react-redux"
import {getUser} from "./redux/actions/getUser"
import CreatePrivateChat from "./pages/CreatePrivateChat/CreatePrivateChat"
import Chat from "./components/Chat/Chat"

const App = ({user, getUser}) => {
    useEffect(() => {
        getUser()
    }, [])

    const render = (
        user
            ?   <>
                <Header/>
                <Redirect path='/private/create-chat' to='/private' />
                <Route path='/common' component={CommonChat} />
                <Route path='/private/create-chat' component={CreatePrivateChat} />
                <Route path='/private/:privateId' component={Chat} />
                <Route path='/private' component={PrivateChats} exact/>
                <Redirect from='/auth' to='/common' exact/>
            </>
            :   <>
                    <Route path='/auth' component={Auth} />
                    <Redirect from='' to='/auth'/>
                </>
    )

    return (
        <div className='container'>
            {render}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: () => dispatch(getUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
