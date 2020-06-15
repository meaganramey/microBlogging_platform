import api from "../../utils/api";

export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_ERROR = "CREATE_USER_ERROR";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

export const signUp = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_USER });
    console.log(credentials)
    const payload = await api.createUser(credentials);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    console.log({ payload, })
    // console.log( typeof payload.statusCode)
    if (payload.statusCode === 200) {
      dispatch({ type: CREATE_USER_SUCCESS, payload });
    }
    if (payload.response.data.statusCode !== 200) {
      dispatch({ type: CREATE_USER_ERROR, payload });
      // localStorage.clear()
    }
  } catch (err) {
    dispatch({
      type: CREATE_USER_FAILURE,
      payload: err.message,
    });
  }
};

