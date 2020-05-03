import {combineReducers} from "redux"
import messagesReducer from "./messagesReducer"
import userReducer from "./userReducer"
import privateChatsReducer from "./privateChatReducer"


const rootReducer = combineReducers({
    messagesReducer,
    userReducer,
    privateChatsReducer
})


export default rootReducer