import { SET_ERROR, SET_FOURSECTION, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  foursection: [],
  error: "",
};
const ReducerFoursection = (state = initialstate, action) => {
  switch (action.type) {
    case SET_FOURSECTION: {
      return { ...state, foursection: action.payload };
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
export default ReducerFoursection;
