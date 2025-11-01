import { SET_MONTAKHAB, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setMontakhab = (montakhab) => {
  return {
    type: SET_MONTAKHAB,
    payload: montakhab,
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
export const fetchMontakhab = () => {
  return async function (dispatch) {
    try {
      let data = await fetch(`${import.meta.env.BASE_URL}db.json`);
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setMontakhab(res.montakhab));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};