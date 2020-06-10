import api from "../../utils/api";

// AUTH CONSTANTS
// export const ADD_TO_USERS_LIST = "ADD_TO_USERS_LIST";
export const DISPLAY_USERS = "DISPLAY_USERS";
export const DISPLAY_USERS_SUCCESS = "DISPLAY_USERS_SUCCESS"
export const DISPLAY_USERS_FAILURE = "DISPLAY_USERS_FAILURE";

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/
export const listOfUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: DISPLAY_USERS });
    const payload = await api.getListOfUsers();
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    console.log({ payload })
    dispatch({ type: DISPLAY_USERS_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: DISPLAY_USERS_FAILURE,
      payload: err.message,
    });
  }
};

// END AUTH ACTIONS
