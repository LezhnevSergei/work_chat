import {EDITING_MESSAGE, MESSAGE_WHICH_EDITING} from "../types"

export const messageWhichEditing = message => dispatch => {
    dispatch(editingMessage(true))
    dispatch(messageWhichEditingSuccess(message))
}

export const editingMessage = (isEditing) => {
    return {
        type: EDITING_MESSAGE,
        isEditing
    }
}

export const messageWhichEditingSuccess = message => {
    return {
        type: MESSAGE_WHICH_EDITING,
        messageWhichEditing: message
    }
}

