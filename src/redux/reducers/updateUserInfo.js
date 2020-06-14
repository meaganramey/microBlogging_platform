// TODO: implement
import {
  UPDATE_USER_INFO,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_ERROR,
  UPDATE_USER_INFO_FAILURE,
} from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  user: {},
  loading: false,
  error: "",
  redirect: false,
};

export const updateUserInfoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return {
        ...state,
        loading: true,
        redirect: false,
      };
    case UPDATE_USER_INFO_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        redirect: true,
      };
    case UPDATE_USER_INFO_ERROR:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload.response.data.message,
      };
    case UPDATE_USER_INFO_FAILURE:
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
