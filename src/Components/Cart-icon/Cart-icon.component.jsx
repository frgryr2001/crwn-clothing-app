import { ShoppingIcon, CartIconContainer, ItemCount } from "./Cart-icon.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CartIcon = ({ toggleCart }) => {
  const { cartCount } = useContext(CartContext);
  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
