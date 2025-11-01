import { SET_FOURPICS2, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setFourpics2 = (fourpics2) => {
  return {
    type: SET_FOURPICS2,
    payload: fourpics2,
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
export const fetchFourpics2 = () => {
  return async function (dispatch) {
    try {
      let data = await fetch(`${import.meta.env.BASE_URL}db.json`);
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setFourpics2(res.fourpics2));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};