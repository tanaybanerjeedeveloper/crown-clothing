import { createSelector } from 'reselect'; //reselect is the library that helps in memoization

//input selector
const selectCart = (state) => state.cart;

//output selectors/memoised selectors
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(( accumulatedQunatity, cartItem ) => accumulatedQunatity + cartItem.quantity , 0)
);
