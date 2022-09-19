import { useContext } from "react";
import "./Shop.styles.scss";
import ProductCard from "../../Components/ProductCard/ProductCard.component";
import { ProductContext } from "../../contexts/product.context";
const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
