import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./Shop.styles.scss";
import CategoriesPreview from "../Category-preview/Categories-preview.component";
import Category from "../Category/Category.component";
import { fetchCategoriesStart } from "../../store/categories/categoryAction";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      dispatch(fetchCategoriesStart());
    };
    getCategoriesMap();
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
