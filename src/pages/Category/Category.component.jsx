import "./Category.styles.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard.component";
import { useSelector } from "react-redux";
import {
  categorySelect,
  selectCategoryIsloading,
} from "../../store/categories/categorySelector";
import Spinner from "../../Components/spinner/spinner.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(categorySelect);
  const [products, setProducts] = useState(categoriesMap[category]);
  const isLoading = useSelector(selectCategoryIsloading);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-item-container">
          {products &&
            products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </div>
      )}
    </>
  );
};

export default Category;
