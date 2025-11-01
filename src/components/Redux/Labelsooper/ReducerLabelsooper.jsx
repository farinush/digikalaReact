import { SET_ERROR, SET_LABELSOOPER, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  labelsooper: {},
  error: "",
};
const ReducerLabelsooper = (state = initialstate, action) => {
  switch (action.type) {
    case SET_LABELSOOPER: {
      return { ...state, labelsooper: action.payload };
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
export default ReducerLabelsooper;
