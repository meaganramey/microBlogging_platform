import api from "../../utils/api";

// AUTH CONSTANTS
export const ADD_PROFILE_IMAGE = "ADD_PROFILE_IMAGE";
export const ADD_PROFILE_IMAGE_SUCCESS = "ADD_PROFILE_IMAGE_SUCCESS";
export const ADD_PROFILE_IMAGE_FAILURE = "ADD_PROFILE_IMAGE_FAILURE";
export const SET_USER_SUCCESS = "SET_USER_SUCCESS"

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/
export const sendProfileImage = (photo) => async (dispatch, getState) => {
  const store = getState()
  // console.log(store)
  let username = store.auth.username
  // let userToken = store.auth.isAuthenticated
  try {
    dispatch({ type: ADD_PROFILE_IMAGE });
    // console.log(photo)
    await api.addProfileImage(username, photo);
    // await another api call to get the Set user (i.e. the user's information in auth.js)
    const payload = await api.showProfileImage(username)
    // console.log(payload)
    const photoResult = btoa(unescape(encodeURIComponent(payload)))
    // console.log(photoResult)
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    dispatch({ type: ADD_PROFILE_IMAGE_SUCCESS });
    dispatch({ type: SET_USER_SUCCESS, photoResult });
    // dispatch setuser action
  } catch (err) {
    dispatch({
      type: ADD_PROFILE_IMAGE_FAILURE,
      payload: err.message,
    });
  }
};

// END AUTH ACTIONS
