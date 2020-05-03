import axios from "axios"
import {FETCH_MESSAGES_ERROR, FETCH_MESSAGES_START, FETCH_MESSAGES_SUCCESS} from "../types"
import {scrollDown} from "../../components/MessageList/MessageList"
import {getUser} from "./getUser"

export const fetchMessages = (Reload = true, url = `https://working-chat.firebaseio.com/messages.json`) => {
    return dispatch => {
        if (Reload) {
            dispatch(fetchMessagesStart())
        }
        try {
            const messages = []
            axios.get(url)
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
                .then(() => dispatch(fetchMessagesSuccess(messages)))
                .then(() => dispatch(getUser()))
                .then(() => scrollDown())

        } catch (e) {
            dispatch(fetchMessagesError(e))
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