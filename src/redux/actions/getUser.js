import {GET_USER} from "../types"
import axios from "axios"

export const getUser = () => dispatch => {
    const userData = JSON.parse(localStorage.getItem('userData'))
    dispatch(getUserSuccess(userData))
}

export const getUserSuccess = (user) => {
    return {
        type: GET_USER,
        user
    }
}