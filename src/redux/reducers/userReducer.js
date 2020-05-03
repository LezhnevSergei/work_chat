import {AUTH_USER, DELETE_USER, GET_USER} from "../types"

const initialState = {
    user: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return {
                user: action.user
            }
        case DELETE_USER:
            return {
                user: {}
            }
        case GET_USER:
            return {
                user: action.user
            }

        default:
            return state
    }
}

export default userReducer