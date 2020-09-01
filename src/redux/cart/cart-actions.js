import cartActionTypes from "./cart-types";

export const toggleCartHidden = () => {
  return {
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
  };
}; //action of showing or hiding the cart

export const addItem = (item) => {
  return {
    type: cartActionTypes.ADD_ITEM,
    payload: item,
  };
}; //action of adding item to cart
