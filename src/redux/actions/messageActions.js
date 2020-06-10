
//MESSAGE CONSTANTS
export const ADD_MESSAGE = "MESS/ADD";
export const DELETE_MESSAGE = "MESSAGE/DELETE";


export const addMessage = message => {
    return {
        type: ADD_MESSAGE,
        payload: message
    }    
}

export const deleteMessage = id => {
    return {
        type: DELETE_MESSAGE,
        payload: id
    }
}