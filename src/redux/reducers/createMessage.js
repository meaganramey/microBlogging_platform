import { CREATE_MESSAGE, CREATE_MESSAGE_SUCCESS, CREATE_MESSAGE_FAILURE } from "../actions/createMessage";

const INITIAL_STATE = {
  message: "",
  loading: false,
  error: "",
};

export const createMessageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_MESSAGE:
      return {
        ...state,
        loading: true,
      };
    case CREATE_MESSAGE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case CREATE_MESSAGE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};