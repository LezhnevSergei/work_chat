import {CREATE_MESSAGE} from "../types"
import axios from 'axios'
import {scrollDown} from "../../components/MessageList/MessageList"
import {getUser} from "./getUser"

export const createMessage = (text, author, url) => {
     return dispatch => {
         const message = {
             author: author.name,
             author_id: author.id,
             text: text,
             publish_date: new Date().toString()
         }

         axios.post(url+'.json', message)
             .then(res => message.id = res.data.name)
             .then(dispatch(createMessageSuccess(message)))
             .then(() => dispatch(getUser()))
             .then(() => scrollDown())
     }
}

export const createMessageSuccess = (message) => {
    return {
        type: CREATE_MESSAGE,
        message
    }
}