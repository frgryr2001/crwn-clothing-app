import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.util";
import { UserContext } from "../../contexts/user.context";
import "./Navigation.styles.scss";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutUserHandler = async () => {
    const res = await signOutUser();
    setCurrentUser(null);
  };
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
            <Link className="nav-link" onClick={signOutUserHandler}>
              SIGN OUT
            </Link>
          )}
          {!currentUser && (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
