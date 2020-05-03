import {REMOVE_MESSAGE} from "../types"
import axios from "axios"

export const removeMessage = (message, url = `https://working-chat.firebaseio.com/messages.json`) => dispatch => {
    axios.delete(`https://working-chat.firebaseio.com/messages/${message.id}.json`)
    dispatch(deleteMessageSuccess(message))
}

export const deleteMessageSuccess = (message) => {
    return {
        type: REMOVE_MESSAGE,
        message
    }
}