import "./Cart-dropdown.styles.scss";
import Button from "../Button/Button.component";
import React from "react";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-item"></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
