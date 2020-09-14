import { createSelector } from 'reselect'; //reselect is the library that helps in memoization

//input selector
const selectCart = (state) => state.cart;

//output selectors/memoised selectors
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(( accumulatedQunatity, cartItem ) => accumulatedQunatity + cartItem.quantity , 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc,cartItem)=> acc + cartItem.quantity * cartItem.price , 0 )
);
