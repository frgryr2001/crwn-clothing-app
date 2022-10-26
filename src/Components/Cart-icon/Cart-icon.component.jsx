import { useDispatch, useSelector } from "react-redux";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./Cart-icon.styles";
import { selectCartCount } from "../../store/cart/cartSelector";
import { setIsCartOpen } from "../../store/cart/cartActions";
const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const toggleCart = () => {
    dispatch(setIsCartOpen());
  };
  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
