import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../Components/Cart-icon/Cart-icon.component";
import CartDropdown from "../../Components/Cart-dropdown/Cart-dropdown.component";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.util";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./Navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, toggleCart } = useContext(CartContext);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser && <NavLink onClick={signOutUser}>SIGN OUT</NavLink>}
          {!currentUser && <NavLink to="/auth">SIGN IN</NavLink>}
          <CartIcon toggleCart={toggleCart} />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};
export default Navigation;
