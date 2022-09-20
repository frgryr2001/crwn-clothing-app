import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  toggleCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

const addCartItem = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (cartItem) => {
    setCartItems(addCartItem(cartItems, cartItem));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const value = { isCartOpen, toggleCart, cartItems, addItemToCart, cartCount };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
