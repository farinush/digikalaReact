import { SET_ERROR, SET_TOPMENU, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  topmenu: {},
  error: "",
};
const ReducerTopmenu = (state = initialstate, action) => {
  switch (action.type) {
    case SET_TOPMENU: {
      return { ...state, topmenu: action.payload };
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
export default ReducerTopmenu;
