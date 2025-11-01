import { SET_ERROR, SET_KHANDANIHA, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  khandaniha: {},
  error: "",
};
const ReducerKhandaniha = (state = initialstate, action) => {
  switch (action.type) {
    case SET_KHANDANIHA: {
      return { ...state, khandaniha: action.payload };
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
export default ReducerKhandaniha;
