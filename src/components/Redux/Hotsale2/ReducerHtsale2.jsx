import { SET_ERROR, SET_HOTSALE2, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  hotsale2: {},
  error: "",
};
const ReducerHotsale2 = (state = initialstate, action) => {
  switch (action.type) {
    case SET_HOTSALE2: {
      return { ...state, hotsale2: action.payload };
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
export default ReducerHotsale2;
