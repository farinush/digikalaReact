import { SET_ERROR, SET_FOURSECTION2, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  foursection2: [],
  error: "",
};
const ReducerFoursection2 = (state = initialstate, action) => {
  switch (action.type) {
    case SET_FOURSECTION2: {
      return { ...state, foursection2: action.payload };
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
export default ReducerFoursection2;
