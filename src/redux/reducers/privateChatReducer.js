import {CREATE_CHAT} from "../types"

const initialState = {
    privateChats: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CHAT:
            return {
                ...state,
                privateChats: [...action.privateChats]
            }

        default:
            return state
    }
}

export default userReducer