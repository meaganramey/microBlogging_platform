import api from "../../utils/api";

export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

export const signUp = (credentials) => async (dispatch) => {
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

