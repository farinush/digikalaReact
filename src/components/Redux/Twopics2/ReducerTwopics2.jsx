import { SET_ERROR, SET_TWOPICS2, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  twopics2:[],
  error: "",
};
const ReducerTwopics2 = (state = initialstate, action) => {
  switch (action.type) {
    case SET_TWOPICS2: {
      return { ...state, twopics2: action.payload };
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
export default ReducerTwopics2;
