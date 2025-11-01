import { SET_ERROR, SET_FAVORITEBRAND, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  favoritebrand: {},
  error: "",
};
const ReducerFavoritebrand = (state = initialstate, action) => {
  switch (action.type) {
    case SET_FAVORITEBRAND: {
      return { ...state, favoritebrand: action.payload };
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
export default ReducerFavoritebrand;
