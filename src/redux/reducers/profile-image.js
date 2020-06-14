// TODO: implement
import { ADD_PROFILE_IMAGE, ADD_PROFILE_IMAGE_SUCCESS, ADD_PROFILE_IMAGE_FAILURE } from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  loading: false,
  error: "",
  // redirect: false,
};

export const addProfileImageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PROFILE_IMAGE:
      return {
        ...state,
        loading: true,
      };
      case ADD_PROFILE_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
      case ADD_PROFILE_IMAGE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};