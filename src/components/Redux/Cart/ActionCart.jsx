import { SET_ADDCART,SET_CART_OPEN,SET_REMOVECART } from "./ActionTypes";

export const setAddcart = (item) => {
  return {
    type: SET_ADDCART,
    payload: item,
  };
};
export const setRemovecart = (uniqueId) => {
  return {
    type: SET_REMOVECART,
    payload: uniqueId,
  };
};
export const setCartOpen = (isOpen) => ({
  type: SET_CART_OPEN,
  payload: isOpen,
});
