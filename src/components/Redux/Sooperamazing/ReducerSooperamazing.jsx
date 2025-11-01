import { SET_ERROR, SET_SOOPERAMAZING, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  sooperamazing: {},
  error: "",
};
const ReducerSooperamazing = (state = initialstate, action) => {
  switch (action.type) {
    case SET_SOOPERAMAZING: {
      return { ...state, sooperamazing: action.payload };
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
export default ReducerSooperamazing;