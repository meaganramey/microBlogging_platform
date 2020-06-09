// TODO: implement
import { CREATE_USER, CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  user: {},
  loading: false,
  error: "",
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...INITIAL_STATE,
        user: action.payload,
        loading: false,
      };
    case CREATE_USER_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};