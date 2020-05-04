import {CREATE_PRIVATE_CHAT} from "../types"
import axios from 'axios'
import {getUser} from "./getUser"

export const createPrivateChat = (name, password, author) => {
    return dispatch => {
        const chat = {
            name: name,
            author_id: author.id,
            password: password,
            publish_date: new Date().toString(),
            messages: []
        }

        axios.post(`https://working-chat.firebaseio.com/private-chats.json`, chat)
            .then(res => chat.privateId = res.data.name)
            .then(dispatch(createPrivateChatSuccess(chat)))
            .then(() => dispatch(getUser()))
    }
}

export const createPrivateChatSuccess = (privateChats) => {
    return {
        type: CREATE_PRIVATE_CHAT,
        privateChats
    }
}