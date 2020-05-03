import axios from "axios"
import {FETCH_MESSAGES_ERROR, FETCH_MESSAGES_START, FETCH_MESSAGES_SUCCESS} from "../types"
import {scrollDown} from "../../components/MessageList/MessageList"
import {getUser} from "./getUser"
import {makeId} from "../../pages/Auth/Auth"

export const fetchPrivateChats = (Reload = true, url = `https://working-chat.firebaseio.com/private-chats.json`) => {
    return dispatch => {
        if (Reload) {
            dispatch(fetchPrivateChatsStart())
        }
        try {
            const privateChats = []
            axios.get(url)
                .then(response => {
                    if (response.data) {
                        Object.keys(response.data).forEach(key => {
                            const privateChat = response.data[key]
                            privateChats.push({
                                id: key,
                                name: privateChat.chatName,
                                password: privateChat.chatPassword,
                                privateId: makeId()
                            })
                        })
                    }
                })
                .then(() => dispatch(fetchPrivateChatsSuccess(privateChats)))
                .then(() => dispatch(getUser()))
                .then(() => scrollDown())

        } catch (e) {
            dispatch(fetchPrivateChatsError(e))
        }
    }
}

export const fetchPrivateChatsStart = () => {
    return {
        type: FETCH_MESSAGES_START
    }
}

export const fetchPrivateChatsSuccess = (privateChats) => {
    return {
        type: FETCH_MESSAGES_SUCCESS,
        privateChats
    }
}

export const fetchPrivateChatsError = (e) => {
    return {
        type: FETCH_MESSAGES_ERROR,
        error: e
    }
}