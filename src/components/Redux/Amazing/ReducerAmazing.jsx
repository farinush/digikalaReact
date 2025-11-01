import { SET_ERROR, SET_AMAZING, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  amazing: {},
  error: "",
};
const ReducerAmazing = (state = initialstate, action) => {
  switch (action.type) {
    case SET_AMAZING: {
      return { ...state, amazing: action.payload };
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
export default ReducerAmazing;