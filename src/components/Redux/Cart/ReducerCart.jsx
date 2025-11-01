import { SET_ADDCART, SET_CART_OPEN, SET_REMOVECART} from "./ActionTypes";
const cartFromStorage = localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")): [];
const initialstate = {
  cart: cartFromStorage,
  isOpen: false,
};
const ReducerCart = (state = initialstate, action) => {
  switch (action.type) {
    case SET_ADDCART:
      const item = action.payload;
      const existItem = state.cart.find((x) => x.uniqueId === item.uniqueId);
      const updatedCart = existItem? state.cart.map((x) => (x.uniqueId === existItem.uniqueId ? item : x)): [...state.cart, item];
      return {...state,cart: updatedCart,isOpen: true};
    case SET_REMOVECART: {
      return {...state, cart: state.cart.filter((x) => x.uniqueId !== action.payload),
      };
    }
    case SET_CART_OPEN:
      return { ...state, isOpen: action.payload };

    default: {
      return state;
    }
  }
};
export default ReducerCart;
