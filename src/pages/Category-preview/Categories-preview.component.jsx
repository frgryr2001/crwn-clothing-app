import { useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../Components/Category-preview/Category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((category) => {
        return (
          <CategoryPreview
            key={category}
            title={category}
            product={categoriesMap[category]}
          />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
