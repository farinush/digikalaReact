import { SET_BOTTOMMENU, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setBottommenu = (bottommenu) => {
  return {
    type: SET_BOTTOMMENU,
    payload: bottommenu,
  };
};
export const setLoading = (status) => {
  return {
    type: SET_LOADING,
    payload: status,
  };
};
export const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};
export const fetchBottommenu = () => {
  return async function (dispatch) {
    try {
      let data = await fetch(`${import.meta.env.BASE_URL}db.json`);
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setBottommenu(res.bottommenu));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};