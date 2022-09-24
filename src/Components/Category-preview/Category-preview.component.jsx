import "./Category-preview.styles.scss";

import { Link, useLocation } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard.component";

const CategoryPreview = ({ title, product }) => {
  const { pathname } = useLocation();
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={`${pathname}/${title}`}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {product
          .filter((_, i) => i < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default CategoryPreview;
