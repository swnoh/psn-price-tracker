import {
  fetchBannerBegin,
  fetchBannerSuccess,
  fetchBannerFailure,
  isCategoryQuickAction,
  fetchCategoryQuickBegin,
  fetchCategoryQuickSuccess,
  fetchCategoryAllBegin,
  fetchCategoryAllSuccess,
  fetchCategorySearchBegin,
  fetchCategorySearchSuccess,
  fetchGameItemApiBegin,
  fetchGameItemApiSuccess,
  fetchItemPriceBegin,
  fetchItemPriceSuccess
} from './actions';

const SITE_URL = 'https://psntracker.azurewebsites.net';

const API_URL =
  'https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/19/';

const fetchBanner = () => {
  return dispatch => {
    dispatch(fetchBannerBegin());
    return fetch(`${SITE_URL}/api/psn/banner`)
      .then(response => response.json())
      .then(data => {
        dispatch(fetchBannerSuccess(data));
      })
      .catch(error => dispatch(fetchBannerFailure(error)));
  };
};

const isCategoryQuick = isCategoryQuick => {
  return dispatch => {
    dispatch(isCategoryQuickAction(isCategoryQuick));
  };
};

const fetchCategoryQuick = limit => {
  return dispatch => {
    dispatch(fetchCategoryQuickBegin());
    return fetch(`${SITE_URL}/api/psn/category_quick?limit=${limit}`)
      .then(response => response.json())
      .then(data => {
        dispatch(fetchCategoryQuickSuccess(data));
      })
      .catch(error => console.log(error));
  };
};

const fetchCategoryAll = (category_name, slideChunk) => {
  return dispatch => {
    dispatch(fetchCategoryAllBegin());
    return fetch(`${SITE_URL}/api/psn/category/${category_name}`)
      .then(response => response.json())
      .then(data => {
        let newCategory = [];

        if (Object.keys(data).length === 0 && data.constructor === Object) {
          return;
        } else {
          for (let i = 0, j = data.gameItem.length; i < j; i += slideChunk) {
            newCategory.push({
              category_url: category_name + '-' + i,
              category_name: category_name,
              gameItem: data.gameItem.slice(i, i + slideChunk)
            });
          }
          dispatch(fetchCategoryAllSuccess(newCategory));
        }
      })
      .catch(error => console.log(error));
  };
};

const fetchCategorySearch = (searchWord, slideChunk) => {
  return dispatch => {
    dispatch(fetchCategorySearchBegin());
    return fetch(`${SITE_URL}/api/psn/search?q=${searchWord}`)
      .then(response => response.json())
      .then(data => {
        let loading = true;

        let newCategory = [];

        if (Object.keys(data).length === 0 && data.constructor === Object) {
          return;
        } else {
          for (let i = 0, j = data.gameItem.length; i < j; i += slideChunk) {
            newCategory.push({
              category_url: 'search-' + searchWord + '-' + i,
              category_name: 'Result for ' + searchWord,
              gameItem: data.gameItem.slice(i, i + slideChunk)
            });
          }
          setTimeout(() => {
            dispatch(fetchCategorySearchSuccess(newCategory));
          }, 1000);
        }
      })
      .catch(error => console.log('Fetch error'));
  };
};

const fetchGameItemApiData = id => {
  return dispatch => {
    dispatch(fetchGameItemApiBegin());
    return fetch(API_URL + id)
      .then(response => response.json())
      .then(data => {
        dispatch(fetchGameItemApiSuccess(data));
      })
      .catch(function(error) {
        console.log('Fetch failed');
      });
  };
};

const fetchItemPrice = id => {
  return dispatch => {
    dispatch(fetchItemPriceBegin());
    return fetch(`${SITE_URL}/api/psn/price/${id}`)
      .then(response => response.json())
      .then(data => {
        dispatch(fetchItemPriceSuccess(data));
      })
      .catch(function(error) {
        console.log('Fetch failed');
      });
  };
};

export default {
  fetchBanner,
  isCategoryQuick,
  fetchCategoryQuick,
  fetchCategoryAll,
  fetchCategorySearch,
  fetchGameItemApiData,
  fetchItemPrice
};
