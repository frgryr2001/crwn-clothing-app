import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./Cart-dropdown.styles";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button.component";
import CartItem from "../Cart-item/Cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
