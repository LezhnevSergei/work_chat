import {
    CREATE_PRIVATE_CHAT,
    FETCH_PRIVATE_CHAT_START,
    FETCH_PRIVATE_CHAT_SUCCESS
} from "../types"

const initialState = {
    privateChats: [],
    loading: false,
    lastPrivateChatId: null
}

const privateChatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRIVATE_CHAT_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_PRIVATE_CHAT_SUCCESS:
            return {
                ...state,
                privateChats: action.privateChats,
                loading: false
            }
        case CREATE_PRIVATE_CHAT:
            return {
                ...state,
                privateChats: [...state.privateChats, action.privateChat],
                lastPrivateChatId: action.privateChat.privateId
            }
        default:
            return state
    }
}

export default privateChatsReducer