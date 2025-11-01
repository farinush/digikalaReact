import { SET_CENTERMENU, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setCentermenu = (centermenu) => {
  return {
    type: SET_CENTERMENU,
    payload: centermenu,
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
export const fetchCentermenu = () => {
  return async function (dispatch) {
    try {
      let data = await fetch(`${import.meta.env.BASE_URL}db.json`);
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setCentermenu(res.centermenu));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};
