import { SET_ERROR, SET_BOTTOMMENU, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  bottommenu: {},
  error: "",
};
const ReducerBottommenu = (state = initialstate, action) => {
  switch (action.type) {
    case SET_BOTTOMMENU: {
      return { ...state, bottommenu: action.payload };
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
export default ReducerBottommenu;