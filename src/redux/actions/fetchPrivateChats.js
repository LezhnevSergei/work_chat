import axios from "axios"
import {
    FETCH_PRIVATE_CHAT_ERROR,
    FETCH_PRIVATE_CHAT_START,
    FETCH_PRIVATE_CHAT_SUCCESS
} from "../types"
import {scrollDown} from "../../components/MessageList/MessageList"

export const fetchPrivateChats = (Reload = true, url = `https://working-chat.firebaseio.com/private-chats.json`) => {
    return dispatch => {
        if (Reload) {
            dispatch(fetchPrivateChatsStart())
        }
        try {
            let respondChats = []
            axios.get(url)
                .then(response => {
                    if (response.data) {
                        Object.keys(response.data).forEach(key => {
                            respondChats.push({...response.data[key], privateId: key})
                        })
                    }

                    return respondChats
                })
                .then((res) => dispatch(fetchPrivateChatsSuccess(respondChats)))
                .then(() => scrollDown())
        } catch (e) {
            dispatch(fetchPrivateChatsError(e))
        }
    }
}

export const fetchPrivateChatsStart = () => {
    return {
        type: FETCH_PRIVATE_CHAT_START
    }
}

export const fetchPrivateChatsSuccess = (privateChats) => {
    return {
        type: FETCH_PRIVATE_CHAT_SUCCESS,
        privateChats
    }
}

export const fetchPrivateChatsError = (e) => {
    return {
        type: FETCH_PRIVATE_CHAT_ERROR,
        error: e
    }
}