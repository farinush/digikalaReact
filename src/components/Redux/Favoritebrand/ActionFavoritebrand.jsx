import { SET_FAVORITEBRAND,SET_ERROR,SET_LOADING } from "./ActionTypes";

export const setFavoritebrand=(favoritebrand)=>{
    return {
        type:SET_FAVORITEBRAND,
        payload:favoritebrand
    }
}
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
export const fetchFavoritebrand = () => {
  return async function (dispatch) {
    try {
      let data = await fetch(`${import.meta.env.BASE_URL}db.json`);
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setFavoritebrand(res.favoritebrand));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};