import {CREATE_PRIVATE_CHAT} from "../types"
import axios from 'axios'

export const createPrivateChat = (name, password, author) => dispatch => {
    const chat = {
        name: name,
        author_id: author.id,
        password: password,
        publish_date: new Date().toString(),
        messages: [],
        privateId: ''
    }

    axios.post(`https://working-chat.firebaseio.com/private-chats.json`, chat)
        .then(res => {
            axios.put(`https://working-chat.firebaseio.com/private-chats/${res.data.name}.json`, {
                ...chat,
                privateId: res.data.name
            })

            return res.data.name
        })
        .then(privateId => dispatch(createPrivateChatSuccess({...chat, privateId})))
}

export const createPrivateChatSuccess = privateChat => {
    return {
        type: CREATE_PRIVATE_CHAT,
        privateChat
    }
}