import api from "../../utils/api";

export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const CREATE_MESSAGE_SUCCESS = "CREATE_MESSAGE_SUCCESS";
export const CREATE_MESSAGE_FAILURE = "CREATE_MESSAGE_FAILURE";

export const newMessage = (message) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_MESSAGE });
    console.log(message)
    const payload = await api.createMessage(message);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
    dispatch({ type: CREATE_MESSAGE_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: CREATE_MESSAGE_FAILURE,
      payload: err.message,
    });
  }
};