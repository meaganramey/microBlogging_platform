import api from "../../utils/api";
import { LOGOUT } from '../actions'

// DELETE USER CONSTANTS
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";


/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/
export const deleteUser = () => async (dispatch, getState) => {
  console.log('we are crazy')
  const store = getState()
  // console.log(store)
  const username = store.auth.username
  try {
    dispatch({ type: DELETE_USER });
     await api.deleteProfile(username);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ payload })
    // dispatch({ type: DELETE_USER_SUCCESS });
    dispatch({type: LOGOUT})
  } catch (err) {
    dispatch({
      type: DELETE_USER_FAILURE,
      payload: err.message,
    });
  }
};

// END DELETE USER ACTIONS
