import { ADD_MESSAGE, DELETE_MESSAGE } from '../actions/messageActions';

getMessages = () => {
    fetch("https://kwitter-api.herokuapp.com/messages?limit=100&offset=0")
      .then((response) => response.json())
        .then((response) => {
          return response.messages                       
        })              
}

const initialState = getMessages();

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return [...state, action.payload]
        case DELETE_MESSAGE:
            return [...state.filter(message => message.id !== action.payload)]
    }
}

export default messageReducer;
