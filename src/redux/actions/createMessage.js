import {CREATE_MESSAGE} from "../types"
import axios from 'axios'
import {scrollDown} from "../../components/MessageList/MessageList"

export const getFormattedData = () => {
    const date = new Date();
    return ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2)
}

export const createMessage = (text, author, url) => {
    return dispatch => {
        const message = {
            author: author.name,
            author_id: author.id,
            text: text,
            publish_date: getFormattedData()
        }

        axios.post(url + '.json', message)
            .then(res => message.id = res.data.name)
            .then(dispatch(createMessageSuccess(message)))
            .then(() => scrollDown())
    }
}

export const createMessageSuccess = (message) => {
    return {
        type: CREATE_MESSAGE,
        message
    }
}