import { SET_POSHTIBANI, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setPoshtibani = (poshtibani) => {
  return {
    type: SET_POSHTIBANI,
    payload: poshtibani,
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
export const fetchPoshtibani = () => {
  return async function (dispatch) {
    try {
      let data = await fetch(`${import.meta.env.BASE_URL}db.json`);
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setPoshtibani(res.poshtibani));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};