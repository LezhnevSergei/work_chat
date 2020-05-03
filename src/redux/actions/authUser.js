import {AUTH_USER} from "../types"
import axios from 'axios'
import {makeId} from "../../pages/Auth/Auth"

export const authUser = (name, password, url = 'https://working-chat.firebaseio.com/users.json') => {
    return dispatch => {
        let isRegisteredUser = false

        axios.get(url)
            .then(response => {
                if (response.data) {
                    Object.keys(response.data).forEach(key => {
                        const respondUser = response.data[key]
                        if (respondUser.name === name && respondUser.password === password) {
                            isRegisteredUser = true
                            dispatch(authUserSuccess(respondUser))
                            localStorage.setItem('userData', JSON.stringify(respondUser))
                        }
                    })
                }


                if (!isRegisteredUser) {
                    const user = {
                        name,
                        password,
                        id: makeId()
                    }

                    axios.post(url, user)
                        .then(() => dispatch(authUserSuccess(user)))
                        .then(() => localStorage.setItem('userData', JSON.stringify(user)))
                }
            })
    }
}

export const authUserSuccess = (user) => {
    return {
        type: AUTH_USER,
        user
    }
}