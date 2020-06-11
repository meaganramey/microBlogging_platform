import { DELETE_USER, DELETE_USER_SUCCESS, DELETE_USER_FAILURE, LOGOUT } from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  isAuthenticated: true,
  username: "",
//   loading: false,
  error: "",
};

export const deleteUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DELETE_USER:
      return {
        ...state,
        // loading: true,
      };
    case DELETE_USER_SUCCESS:
      const { username } = action.payload;
      return {
        ...state,
        isAuthenticated: false,
        username,
        // loading: false,
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        // loading: false,
      };
      case LOGOUT:
        return {
          isAuthenticated: false,
          loading: true,
        }
    default:
      return state;
  }
};
