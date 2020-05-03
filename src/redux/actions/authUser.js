import {AUTH_USER} from "../types"
import axios from 'axios'
import {makeId} from "../../pages/Auth/Auth"

export const authUser = (name, password, url = 'https://working-chat.firebaseio.com/users.json') => {
    return dispatch => {
        let user
        let isRegisteredUser = false

        axios.get(url)
            .then(response => {
                if (response.data) {
                    Object.keys(response.data).forEach(key => {
                        const respondUser = response.data[key]
                        if (respondUser.name === name && respondUser.password === password) {
                            isRegisteredUser = true

                            user = respondUser

                            dispatch(authUserSuccess(user))
                        }
                    })
                }
            })

        if (!isRegisteredUser) {
            user = {
                name,
                password,
                id: makeId()
            }

            localStorage.setItem('userData', JSON.stringify(user))
            axios.post(url, user)
                .then(() => dispatch(authUserSuccess(user)))


        }
    }
}

export const authUserSuccess = (user) => {
    return {
        type: AUTH_USER,
        user
    }
}