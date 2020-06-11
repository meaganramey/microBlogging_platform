import api from "../../utils/api";

// AUTH CONSTANTS
// export const ADD_TO_USERS_LIST = "ADD_TO_USERS_LIST";
export const DISPLAY_MESSAGES = "DISPLAY_MESSAGES";
export const DISPLAY_MESSAGES_SUCCESS = "DISPLAY_MESSAGES_SUCCESS"
export const DISPLAY_MESSAGES_FAILURE = "DISPLAY_MESSAGES_FAILURE";

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/
export const listOfMessages = () => async (dispatch, getState) => {
  try {
    dispatch({ type: DISPLAY_MESSAGES });
    const payload = await api.getListOfMessages();
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    console.log({ payload })
    dispatch({ type: DISPLAY_MESSAGES_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: DISPLAY_MESSAGES_FAILURE,
      payload: err.message,
    });
  }
};

// END AUTH ACTIONS
