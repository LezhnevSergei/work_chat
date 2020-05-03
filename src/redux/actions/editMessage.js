import {EDIT_MESSAGE} from "../types"
import axios from "axios"
import {fetchMessages} from "./fetchMessages"
import {editingMessage} from "./messageWhichEditing"


export const editMessage = (text, message) => dispatch => {
    dispatch(editMessageSuccess())
    axios.put(`https://working-chat.firebaseio.com/messages/${message.id}.json`, {...message, text})
        .then(() => dispatch(fetchMessages(false)))
        .then(() => dispatch(editingMessage(false)))
}

export const editMessageSuccess = () => {
    return {
        type: EDIT_MESSAGE
    }
}


