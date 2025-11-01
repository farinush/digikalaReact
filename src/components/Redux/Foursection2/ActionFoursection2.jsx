import { SET_FOURSECTION2, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setFoursection2 = (foursection2) => {
  return {
    type: SET_FOURSECTION2,
    payload: foursection2,
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
export const fetchFoursection2 = () => {
  return async function (dispatch) {
    try {
      let data = await fetch(`${import.meta.env.BASE_URL}db.json`);
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setFoursection2(res.foursection2));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};
