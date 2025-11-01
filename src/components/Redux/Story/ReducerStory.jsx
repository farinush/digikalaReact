import { SET_ERROR, SET_STORY, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  story: [],
  error: "",
};
const ReducerStory = (state = initialstate, action) => {
  switch (action.type) {
    case SET_STORY: {
      return { ...state, story: action.payload };
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
export default ReducerStory;