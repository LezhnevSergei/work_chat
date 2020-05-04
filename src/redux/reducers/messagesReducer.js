import {
    CREATE_MESSAGE, EDIT_MESSAGE, EDITING_MESSAGE,
    FETCH_MESSAGES_ERROR,
    FETCH_MESSAGES_START,
    FETCH_MESSAGES_SUCCESS, MESSAGE_WHICH_EDITING,
    REMOVE_MESSAGE
} from "../types"

const initialState = {
    messages: [],
    messageWhichEditing: {},
    loading: false,
    error: null,
    isEditing: false
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MESSAGES_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_MESSAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                messages: [...action.messages]
            }
        case FETCH_MESSAGES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case CREATE_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.message]
            }
        case REMOVE_MESSAGE:
            return {
                ...state,
                messages: [...state.messages.filter(msg => msg !== action.message)]
            }
        case MESSAGE_WHICH_EDITING:
            return {
                ...state,
                messageWhichEditing: action.messageWhichEditing
            }
        case EDITING_MESSAGE:
            return {
                ...state,
                isEditing: action.isEditing
            }
        case EDIT_MESSAGE:
            return {
                ...state
            }

        default:
            return state
    }
}

export default messagesReducer