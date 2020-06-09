import api from "../../utils/api";

// AUTH CONSTANTS
export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/
export const signUp = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_USER });
    console.log(credentials)
    const payload = await api.createUser(credentials);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
    dispatch({ type: CREATE_USER_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: CREATE_USER_FAILURE,
      payload: err.message,
    });
  }
};

// END AUTH ACTIONS
