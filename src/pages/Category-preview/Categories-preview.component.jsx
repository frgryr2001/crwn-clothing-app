import {
  categorySelect,
  selectCategoryIsloading,
} from "../../store/categories/categorySelector";
import { useSelector } from "react-redux";
import CategoryPreview from "../../Components/Category-preview/Category-preview.component";
import Spinner from "../../Components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(categorySelect);

  const isLoading = useSelector(selectCategoryIsloading);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((category) => {
          return (
            <CategoryPreview
              key={category}
              title={category}
              product={categoriesMap[category]}
            />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
