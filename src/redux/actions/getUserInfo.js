import api from "../../utils/api";

// AUTH CONSTANTS
// export const ADD_TO_USERS_LIST = "ADD_TO_USERS_LIST";
export const DISPLAY_USER_INFO = "DISPLAY_USER_INFO";
export const DISPLAY_USER_INFO_SUCCESS = "DISPLAY_USER_INFO_SUCCESS"
export const DISPLAY_USER_INFO_FAILURE = "DISPLAY_USER_INFO_FAILURE";

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/
export const getUserInfoAction = () => async (dispatch, getState) => {
  const store = getState()
  const username = store.auth.username
  try {
    dispatch({ type: DISPLAY_USER_INFO });
    const payload = await api.getUserInfo(username);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    console.log({ payload })
    dispatch({ type: DISPLAY_USER_INFO_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: DISPLAY_USER_INFO_FAILURE,
      payload: err.message,
    });
  }
};

// END AUTH ACTIONS
