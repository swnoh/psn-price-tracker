import types from './types';

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
  banners: { bannerItems: [], bannerBackgroundUrl: [] },
  categoryItems: [],
  categoryExpansionPanel: false,
  isGameItemApiData: false,
  gameItemApiData: {},
  isItemPrice: false,
  itemPrice: {},
  isCategoryQuick: false,
  isFetchDone: false
};

const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_BANNER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case types.FETCH_BANNER_SUCCESS:
      return {
        ...state,
        loading: false,
        banners: action.banners
      };

    case types.FETCH_BANNER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    case types.IS_CATEGORY_QUICK:
      return {
        ...state,
        isCategoryQuick: action.isCategoryQuick
      };

    case types.FETCH_CATEGORY_QUICK_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case types.FETCH_CATEGORY_QUICK_SUCCESS:
      return {
        ...state,
        categoryItems: action.categoryItems,
        categoryExpansionPanel: false
      };

    case types.FETCH_CATEGORY_QUICK_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };

    case types.FETCH_CATEGORY_ALL_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case types.FETCH_CATEGORY_ALL_SUCCESS:
      return {
        ...state,
        categoryItems: action.categoryItems,
        categoryExpansionPanel: true
      };

    case types.FETCH_CATEGORY_ALL_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };

    case types.FETCH_CATEGORY_SEARCH_BEGIN:
      return {
        ...state,
        error: null,
        isFetchDone: false
      };

    case types.FETCH_CATEGORY_SEARCH_SUCCESS:
      return {
        ...state,
        categoryItems: action.categoryItems,
        categoryExpansionPanel: true,
        isFetchDone: true
      };

    case types.FETCH_CATEGORY_SEARCH_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };

    case types.FETCH_GAME_ITEM_API_DATA_BEGIN: {
      const { gameItemApiData } = action;
      return {
        ...state,
        isGameItemApiData: false
      };
    }

    case types.FETCH_GAME_ITEM_API_DATA_SUCCESS: {
      const { gameItemApiData } = action;
      return {
        ...state,
        isGameItemApiData: true,
        gameItemApiData
      };
    }
    case types.FETCH_ITEM_PRICE_BEGIN: {
      const { gameItemApiData } = action;
      return {
        ...state,
        isItemPrice: false
      };
    }

    case types.FETCH_ITEM_PRICE_SUCCESS: {
      const { itemPrice } = action;
      return {
        ...state,
        isItemPrice: true,
        itemPrice
      };
    }

    default:
      return state;
  }
};

export default mainReducer;
