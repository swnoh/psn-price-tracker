import types from './types';

export const fetchBannerBegin = () => ({
  type: types.FETCH_BANNER_BEGIN
});

export const fetchBannerSuccess = banners => ({
  type: types.FETCH_BANNER_SUCCESS,
  banners: banners
});

export const fetchBannerError = error => ({
  type: types.FETCH_BANNER_FAILURE,
  payload: { error }
});

export const fetchCategoryQuickBegin = () => ({
  type: types.FETCH_CATEGORY_QUICK_BEGIN
});

export const fetchCategoryQuickSuccess = categoryItems => ({
  type: types.FETCH_CATEGORY_QUICK_SUCCESS,
  categoryItems: categoryItems
});

export const fetchCategoryQuickError = error => ({
  type: types.FETCH_CATEGORY_QUICK_FAILURE,
  payload: { error }
});

export const fetchCategoryAllBegin = () => ({
  type: types.FETCH_CATEGORY_ALL_BEGIN
});

export const fetchCategoryAllSuccess = categoryItems => ({
  type: types.FETCH_CATEGORY_ALL_SUCCESS,
  categoryItems: categoryItems
});

export const fetchCategoryAllError = error => ({
  type: types.FETCH_CATEGORY_ALL_FAILURE,
  payload: { error }
});

export const fetchCategorySearchBegin = () => ({
  type: types.FETCH_CATEGORY_SEARCH_BEGIN
});

export const fetchCategorySearchSuccess = categoryItems => ({
  type: types.FETCH_CATEGORY_SEARCH_SUCCESS,
  categoryItems: categoryItems
});

export const fetchCategorySearchError = error => ({
  type: types.FETCH_CATEGORY_SEARCH_FAILURE,
  payload: { error }
});

export const fetchGameItemApiBegin = () => ({
  type: types.FETCH_GAME_ITEM_API_DATA_BEGIN
});

export const fetchGameItemApiSuccess = data => ({
  type: types.FETCH_GAME_ITEM_API_DATA_SUCCESS,
  gameItemApiData: data
});

export const fetchItemPriceBegin = () => ({
  type: types.FETCH_ITEM_PRICE_BEGIN
});

export const fetchItemPriceSuccess = data => ({
  type: types.FETCH_ITEM_PRICE_SUCCESS,
  itemPrice: data
});

export const isCategoryQuickAction = data => ({
  type: types.IS_CATEGORY_QUICK,
  isCategoryQuick: data
});
