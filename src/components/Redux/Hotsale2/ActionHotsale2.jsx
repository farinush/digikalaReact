import { SET_HOTSALE2, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setHotsale2 = (hotsale2) => {
  return {
    type: SET_HOTSALE2,
    payload: hotsale2,
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
export const fetchHotsale2 = () => {
  return async function (dispatch) {
    try {
      let data = await fetch(`${import.meta.env.BASE_URL}db.json`);
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setHotsale2(res.hotsale2));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};