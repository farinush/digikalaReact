import { SET_ERROR, SET_DIGITYPE, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  digitype: [],
  error: "",
};
const ReducerDigitype = (state = initialstate, action) => {
  switch (action.type) {
    case SET_DIGITYPE: {
      return { ...state, digitype: action.payload };
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
export default ReducerDigitype;