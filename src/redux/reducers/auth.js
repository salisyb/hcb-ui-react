import {
  SET_TOKEN,
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_FAIL,
  USER_LOGOUT,
  RESTORE_TOKEN,
  USER_RESTORING,
} from "../constants/auth";

const initialState = {
  token: null,
  isAuthenticated: false,
  isRestoringUser: true,
  isLoading: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RESTORE_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
        isRestoringUser: false,
      };
    case USER_RESTORING:
      return {
        ...state,
        isRestoringUser: true,
      };
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        isRestoringUser: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_ERROR:
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isRestoringUser: false,
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case USER_LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}