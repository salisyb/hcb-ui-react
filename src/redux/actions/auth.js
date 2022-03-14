import axios from "../../axios";
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
  dispatch({ type: USER_LOADING });
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

  axios
    .get("http://127.0.0.1:8000/api/user", config)
    .then((response) => {
      dispatch({ type: USER_LOADED, payload: response.data });
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
      }
      // pass
    });
};

export const loginUser = (info, showResult) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post("http://127.0.0.1:8000/api/login", JSON.stringify(info), config)
    .then((response) => {
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      showResult();
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
      }
      // pass
    });
};
export const registerUser = (info, statusResult) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  console.log(info);
  axios
    .post("http://127.0.0.1:8000/api/register", JSON.stringify(info), config)
    .then((response) => {
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
      statusResult();
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
      }
      // pass
    });
};
