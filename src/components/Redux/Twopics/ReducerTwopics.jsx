import { SET_ERROR, SET_TWOPICS, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  twopics:[],
  error: "",
};
const ReducerTwopics = (state = initialstate, action) => {
  switch (action.type) {
    case SET_TWOPICS: {
      return { ...state, twopics: action.payload };
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
export default ReducerTwopics;
