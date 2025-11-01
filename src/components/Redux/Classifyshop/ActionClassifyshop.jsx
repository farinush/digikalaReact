import { SET_CLASSIFYSHOP, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setClassifyshop = (classifyshop) => {
  return {
    type: SET_CLASSIFYSHOP,
    payload: classifyshop,
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
export const fetchClassifyshop = () => {
  return async function (dispatch) {
    try {
      let data = await fetch(`${import.meta.env.BASE_URL}db.json`);
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setClassifyshop(res.classifyshop));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};