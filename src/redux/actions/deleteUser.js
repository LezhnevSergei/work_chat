import {DELETE_USER} from "../types"

export const deleteUser = () => dispatch => {
    localStorage.clear()
    dispatch(deleteUserSuccess())
    window.location.reload()
}

export const deleteUserSuccess = () => {
    return {
        type: DELETE_USER
    }
}