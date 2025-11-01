import { SET_TWOPICS2, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setTwopics2 = (twopics2) => {
  return {
    type: SET_TWOPICS2,
    payload: twopics2,
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
export const fetchTwopics2 = () => {
  return async function (dispatch) {
    try {
      let data = await fetch(`${import.meta.env.BASE_URL}db.json`);
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setTwopics2(res.twopics2));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};
