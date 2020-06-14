import api from "../../utils/api";

// AUTH CONSTANTS
// export const ADD_TO_USERS_LIST = "ADD_TO_USERS_LIST";
export const UPDATE_USER_INFO = "UPDATE_USER_INFO";
export const UPDATE_USER_INFO_SUCCESS = "UPDATE_USER_INFO_SUCCESS"
export const UPDATE_USER_INFO_ERROR = "UPDATE_USER_INFO_ERROR"
export const UPDATE_USER_INFO_FAILURE = "UPDATE_USER_INFO_FAILURE";

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/
export const updateUserInfoAction = (updateUserDetails) => async (dispatch, getState) => {
  const store = getState()
  const username = store.auth.username
  try {
    dispatch({ type: UPDATE_USER_INFO });
    const payload = await api.updateUserInfo(username, updateUserDetails);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    console.log({ payload })
    if (payload.statusCode === 200) {
      dispatch({ type: UPDATE_USER_INFO_SUCCESS, payload });
    }
    if (payload.response.data.statusCode !== 200) {
      dispatch({ type: UPDATE_USER_INFO_ERROR, payload })
    }
  } catch (err) {
    dispatch({
      type: UPDATE_USER_INFO_FAILURE,
      payload: err.message,
    });
  }
};

// END AUTH ACTIONS
