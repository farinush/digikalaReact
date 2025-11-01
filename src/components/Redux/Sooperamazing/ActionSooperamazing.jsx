import { SET_SOOPERAMAZING, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setSooperamazing = (sooperamazing) => {
  return {
    type: SET_SOOPERAMAZING,
    payload: sooperamazing,
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
export const fetchSooperamazing = () => {
  return async function (dispatch) {
    try {
      let data = await fetch(`${import.meta.env.BASE_URL}db.json`);
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setSooperamazing(res.sooperamazing));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};