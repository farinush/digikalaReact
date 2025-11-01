import { SET_ERROR, SET_FOOTER, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  footer: {},
  error: "",
};
const ReducerFooter = (state = initialstate, action) => {
  switch (action.type) {
    case SET_FOOTER: {
      return { ...state, footer: action.payload };
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
export default ReducerFooter;
