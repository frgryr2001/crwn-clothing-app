import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.util";
import {
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
} from "./categoryAction";
import { CATEGORIES_ACTION_TYPES } from "./categoryTypes";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    console.log("categoriesArray", categoriesArray);

    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (e) {
    yield put(fetchCategoriesFailure(e.message));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
