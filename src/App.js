import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.component";
import Navigation from "./pages/navigation/Navigation.component";
import Authentication from "./pages/Authentication/Authentication.component";
const Shop = () => {
  return <h1>I am the shop!</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
