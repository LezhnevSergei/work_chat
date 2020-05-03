import {REMOVE_MESSAGE} from "../types"
import axios from "axios"

export const removeMessage = (url, message) => dispatch => {
    axios.delete(url + `/${message.id}.json`)
    dispatch(deleteMessageSuccess(message))
}

export const deleteMessageSuccess = (message) => {
    return {
        type: REMOVE_MESSAGE,
        message
    }
}