import React from "react";
import "./Checkout.styles.scss";
import CheckoutItem from "../../Components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import { selectCartItem, selectCartTotal } from "../../store/cart/cartSelector";
import PaymentForm from "../../Components/payment-form/Payment-form.component";

const Checkout = () => {
  const cartItems = useSelector(selectCartItem);
  const total = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block ">
          <span>Product</span>
        </div>
        <div className="header-block ">
          <span>Description</span>
        </div>
        <div className="header-block ">
          <span>Quantity</span>
        </div>
        <div className="header-block ">
          <span>Price</span>
        </div>
        <div className="header-block ">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${total}</span>
      <PaymentForm />
    </div>
  );
};

export default Checkout;
