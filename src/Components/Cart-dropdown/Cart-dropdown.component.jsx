import "./Cart-dropdown.styles.scss";
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
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
