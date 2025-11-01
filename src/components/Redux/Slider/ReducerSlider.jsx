import { SET_ERROR, SET_SLIDER, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  slider: [],
  error: "",
};
const ReducerSlider = (state = initialstate, action) => {
  switch (action.type) {
    case SET_SLIDER: {
      return { ...state, slider: action.payload };
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
export default ReducerSlider;