import axios from "axios"
import {FETCH_MESSAGES_ERROR, FETCH_MESSAGES_START, FETCH_MESSAGES_SUCCESS} from "../types"
import {scrollDown} from "../../components/MessageList/MessageList"
import {getUser} from "./getUser"

export const fetchMessages = (url, Reload = true) => {
    return dispatch => {
        if (Reload) {
            dispatch(fetchMessagesStart())
        }
        try {
            const messages = []
            axios.get(url + '.json')
                .then(response => {
                    if (response.data) {
                        Object.keys(response.data).forEach(key => {
                            const message = response.data[key]
                            messages.push({
                                id: key,
                                author: message.author,
                                author_id: message.author_id,
                                text: message.text,
                                publish_date: message.publish_date
                            })
                        })
                    }
                })
                .then(() => dispatch(getUser()))
                .then(() => dispatch(fetchMessagesSuccess(messages)))
                .then(() => Reload? scrollDown() : {})


        } catch (e) {
            dispatch(fetchMessagesError(e))
            console.log(e.message)
        }
    }
}

export const fetchMessagesStart = () => {
    return {
        type: FETCH_MESSAGES_START
    }
}

export const fetchMessagesSuccess = (messages) => {
    return {
        type: FETCH_MESSAGES_SUCCESS,
        messages
    }
}

export const fetchMessagesError = (e) => {
    return {
        type: FETCH_MESSAGES_ERROR,
        error: e
    }
}