import { SET_KHANDANIHA, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setKhandaniha = (khandaniha) => {
  return {
    type: SET_KHANDANIHA,
    payload: khandaniha,
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
export const fetchKhandaniha = () => {
  return async function (dispatch) {
    try {
      let data = await fetch(`${import.meta.env.BASE_URL}db.json`);
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setKhandaniha(res.khandaniha));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};