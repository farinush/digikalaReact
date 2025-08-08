import { SET_TOPMENU, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setTopmenu = (header) => {
  return {
    type: SET_TOPMENU,
    payload: header,
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
export const fetchTopmenu = () => {
  return async function (dispatch) {
    try {
      let data = await fetch("");
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setTopmenu(res));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};
