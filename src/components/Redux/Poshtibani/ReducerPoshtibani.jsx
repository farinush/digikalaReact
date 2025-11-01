import { SET_ERROR, SET_POSHTIBANI, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  poshtibani: {},
  error: "",
};
const ReducerPoshtibani = (state = initialstate, action) => {
  switch (action.type) {
    case SET_POSHTIBANI: {
      return { ...state, poshtibani: action.payload };
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
export default ReducerPoshtibani;
