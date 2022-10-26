import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartIcon from "../../Components/Cart-icon/Cart-icon.component";
import CartDropdown from "../../Components/Cart-dropdown/Cart-dropdown.component";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { selectIsCartOpen } from "../../store/cart/cartSelector";
import { signOutStart } from "../../store/user/userAction";
import { selectCurrentUser } from "../../store/user/userSelectors";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./Navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => {
    dispatch(signOutStart());
  };

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
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};
export default Navigation;
