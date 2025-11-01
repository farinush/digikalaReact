import { SET_ERROR, SET_LOGIN, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  login: {},
  error: "",
};
const ReducerLogin = (state = initialstate, action) => {
  switch (action.type) {
    case SET_LOGIN: {
      return { ...state, login: action.payload };
    }
    case SET_LOADING: {
      return { ...state, loading: action.payload };
    }
    case SET_ERROR: {
      return { ...state, error: action.payload };
    }
    default: {
      return state;
    }
  }
};
export default ReducerLogin;
