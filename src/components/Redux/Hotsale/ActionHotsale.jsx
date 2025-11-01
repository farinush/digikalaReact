import { SET_HOTSALE, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setHotsale = (hotsale) => {
  return {
    type: SET_HOTSALE,
    payload: hotsale,
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
export const fetchHotsale = () => {
  return async function (dispatch) {
    try {
      let data = await fetch(`${import.meta.env.BASE_URL}db.json`);
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setHotsale(res.hotsale));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};