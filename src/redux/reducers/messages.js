// TODO: implement
import { DISPLAY_MESSAGES_SUCCESS, DISPLAY_MESSAGES, DISPLAY_MESSAGES_FAILURE } from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  messages: [],
  loading: false,
  error: "",
};

export const listOfMessagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISPLAY_MESSAGES:
      return {
        ...state,
        loading: true,
      };
    case DISPLAY_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload.messages,
        loading: false,
      };
      case DISPLAY_MESSAGES_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
// group all users related actions in one file... ie. ad to users.js