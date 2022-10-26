import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {
  return state.categories;
};

export const selectCategory = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.categories
);

export const categorySelect = createSelector([selectCategory], (categories) => {
  return categories.reduce((acc, doc) => {
    const { title, items } = doc;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
});
export const selectCategoryIsloading = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.isLoading
);
