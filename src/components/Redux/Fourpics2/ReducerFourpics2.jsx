import { SET_ERROR, SET_FOURPICS2, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  fourpics2: [],
  error: "",
};
const ReducerFourpics2 = (state = initialstate, action) => {
  switch (action.type) {
    case SET_FOURPICS2: {
      return { ...state, fourpics2: action.payload };
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
export default ReducerFourpics2;