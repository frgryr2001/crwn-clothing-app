import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../Components/Cart-icon/Cart-icon.component";
import CartDropdown from "../../Components/Cart-dropdown/Cart-dropdown.component";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.util";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import "./Navigation.styles.scss";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, toggleCart } = useContext(CartContext);
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser && (
            <Link className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </Link>
          )}
          {!currentUser && (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon toggleCart={toggleCart} />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
