import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SET_USER_SUCCESS,
  GOOGLE_LOGIN_SUCCESS,
} from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  isAuthenticated: false,
  username: "",
  loading: false,
  error: "",
  photo: "",
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case LOGIN_SUCCESS:
      const { username, token } = action.payload;
      return {
        ...INITIAL_STATE,
        isAuthenticated: token,
        username,
        loading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    case LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    case SET_USER_SUCCESS:
      return {
        ...state,
        photo: action.payload,
        // payload should be an obj that contains username, displayname, and profile photo
      };
      case GOOGLE_LOGIN_SUCCESS:
        console.log(action.payload)
        return {
          ...INITIAL_STATE,
          isAuthenticated: action.payload.token,
          username: action.payload.username,
      };
    default:
      return state;
  }
};
