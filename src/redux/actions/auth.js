import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  UPDATE_USER,
  UPDATE_USER_FAIL,
  USER_LOGOUT,
  SET_TOKEN,
  USER_RESTORING,
} from "../constants/auth";

export const restoreUser = () => (dispatch, getState) => {
  dispatch({ type: USER_RESTORING });
  //Get Token from the state

  const token = getState().auth.token;
  // Header
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //Check to see if there is an token and to header
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
};
