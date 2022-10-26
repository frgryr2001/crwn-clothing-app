import "./ProductCard.styles.scss";
import Button, { BUTTON_TYPES_CLASS } from "../Button/Button.component";

import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cartActions";
import { selectCartItem } from "../../store/cart/cartSelector";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItem);
  const { name, price, imageUrl } = product;
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPES_CLASS.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
