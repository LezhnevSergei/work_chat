import {EDIT_MESSAGE} from "../types"
import axios from "axios"
import {fetchMessages} from "./fetchMessages"
import {editingMessage} from "./messageWhichEditing"


export const editMessage = (text, message, url) => dispatch => {
    dispatch(editMessageSuccess())
    axios.put(url + `/${message.id}.json`, {...message, text})
        .then(() => dispatch(editingMessage(false)))
        .then(() => dispatch(fetchMessages(url, false)))
}

export const editMessageSuccess = () => {
    return {
        type: EDIT_MESSAGE
    }
}


