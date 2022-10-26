import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItem = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);
export const selectCartCount = createSelector([selectCartItem], (cartItems) => {
  return cartItems.reduce((acc, item) => acc + item.quantity, 0);
});
export const selectCartTotal = createSelector([selectCartItem], (cartItems) => {
  return cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
});
