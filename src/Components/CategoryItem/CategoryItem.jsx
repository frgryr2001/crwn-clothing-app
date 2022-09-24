import { useLocation, useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  CategoryContainer,
  Body,
} from "./CategoryItem.styles";

const CategoryItem = ({ title, imageUrl }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    navigate(`${location.pathname}shop/${title}`);
  };
  return (
    <CategoryContainer onClick={handleClick}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryContainer>
  );
};

export default CategoryItem;
