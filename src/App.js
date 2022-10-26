import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./pages/home/Home.component";
import Navigation from "./pages/navigation/Navigation.component";
import Authentication from "./pages/Authentication/Authentication.component";
import Shop from "./pages/shop/Shop.component";
import Checkout from "./pages/Checkout/Checkout.component";
import { checkUserSession } from "./store/user/userAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
