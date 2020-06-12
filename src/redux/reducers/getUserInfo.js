// TODO: implement
import { DISPLAY_USER_INFO_SUCCESS, DISPLAY_USER_INFO, DISPLAY_USER_INFO_FAILURE } from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  user: {},
  loading: false,
  error: "",
};

export const getUserInfoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISPLAY_USER_INFO:
      return {
        ...state,
        loading: true,
      };
    case DISPLAY_USER_INFO_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
      case DISPLAY_USER_INFO_FAILURE:
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