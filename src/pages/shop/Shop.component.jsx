import { Routes, Route } from "react-router-dom";
import "./Shop.styles.scss";
import CategoriesPreview from "../Category-preview/Categories-preview.component";
import Category from "../Category/Category.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
