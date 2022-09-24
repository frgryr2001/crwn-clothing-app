import "./ProductCard.styles.scss";
import Button, { BUTTON_TYPES_CLASS } from "../Button/Button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;
  const addProducttoCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPES_CLASS.inverted}
        onClick={addProducttoCart}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
