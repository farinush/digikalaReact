import { SET_ERROR, SET_MONTAKHAB, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  montakhab: {},
  error: "",
};
const ReducerMontakhab = (state = initialstate, action) => {
  switch (action.type) {
    case SET_MONTAKHAB: {
      return { ...state, montakhab: action.payload };
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
export default ReducerMontakhab;
