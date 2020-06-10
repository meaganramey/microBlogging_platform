// TODO: implement
import { DISPLAY_USERS_SUCCESS, DISPLAY_USERS, DISPLAY_USERS_FAILURE } from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  users: {},
  loading: false,
  error: "",
};

export const listOfUsersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISPLAY_USERS:
      return {
        ...state,
        loading: true,
      };
    case DISPLAY_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
      case DISPLAY_USERS_FAILURE:
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