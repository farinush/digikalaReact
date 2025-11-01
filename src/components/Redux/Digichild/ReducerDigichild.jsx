import { SET_ERROR, SET_DIGICHILD, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  digichild: [],
  error: "",
};
const ReducerDigichild = (state = initialstate, action) => {
  switch (action.type) {
    case SET_DIGICHILD: {
      return { ...state, digichild: action.payload };
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
export default ReducerDigichild;