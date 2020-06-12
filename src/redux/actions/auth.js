import api from "../../utils/api";

// AUTH CONSTANTS
export const LOGIN = "AUTH/LOGIN";
export const LOGIN_SUCCESS = "AUTH/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "AUTH/LOGIN_FAILURE";
export const GOOGLE_LOGIN = 'AUTH/GOOGLE_LOGIN'
export const GOOGLE_LOGIN_SUCCESS ='AUTH/GOOGLE_LOGIN_SUCCESS'
export const GOOGLE_LOGIN_FAILURE = 'AUTH/GOOGLE_LOGIN_FAILURE'
export const LOGOUT = "AUTH/LOGOUT";

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/
export const login = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOGIN });
    const payload = await api.login(credentials);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
    dispatch({ type: GOOGLE_LOGIN});
    const result = await api.useGoogleLogin()
    console.log({result})
    dispatch({ type: LOGIN_SUCCESS, payload });
    // dispatch({type: GOOGLE_LOGIN_SUCCESS, result});
  } catch (err) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: err.message,
    });
    dispatch({
      type: GOOGLE_LOGIN_FAILURE,
      payload: err.message
    });
  }
};

export const loginGoogle = (payload) => async (dispatch, getState) => {
  console.log(payload)
  dispatch({ type: GOOGLE_LOGIN_SUCCESS, payload });
};

export const logout = () => async (dispatch, getState) => {
  try {
    // We do not care about the result of logging out
    // as long as it succeeds
    await api.logout();
  } finally {
    /**
     * Let the reducer know that we are logged out
     */
    dispatch({ type: LOGOUT });
    localStorage.clear()
  }
};
// END AUTH ACTIONS
