import { SET_LABELSOOPER, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setLabelsooper = (labelsooper) => {
  return {
    type: SET_LABELSOOPER,
    payload: labelsooper,
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
export const fetchLabelsooper = () => {
  return async function (dispatch) {
    try {
      let data = await fetch(`${import.meta.env.BASE_URL}db.json`);
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setLabelsooper(res.labelsooper));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};