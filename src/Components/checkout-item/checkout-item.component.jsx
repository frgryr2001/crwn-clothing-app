import "./checkout-item.styles.scss";
import { selectCartItem } from "../../store/cart/cartSelector";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cartActions";
import { useSelector, useDispatch } from "react-redux";
const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItem);
  const { name, imageUrl, price, quantity } = cartItem;
  const addItemtoCartHandler = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };
  const removeItemFromCartHandler = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };
  const clearBtnHandler = (e) => {
    dispatch(clearItemFromCart(cartItems, cartItem));
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemFromCartHandler}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={addItemtoCartHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearBtnHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
