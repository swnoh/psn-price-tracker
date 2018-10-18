import types from './types';

const INITIAL_STATE = {
  isPanelPriceHistory: true,
  isPanelMedia: false,
  isPanelDescription: false,
  selectedGameItem: {},
  isExpansionPanelMounted: false
};
const expansionPanelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SELECT_PANEL_PRICE_HISTORY: {
      return {
        ...state,
        isPanelPriceHistory: true,
        isPanelMedia: false,
        isPanelDescription: false
      };
    }

    case types.SELECT_PANEL_MEDIA: {
      return {
        ...state,
        isPanelPriceHistory: false,
        isPanelMedia: true,
        isPanelDescription: false
      };
    }

    case types.SELECT_PANEL_DESCRIPTION: {
      return {
        ...state,
        isPanelPriceHistory: false,
        isPanelMedia: false,
        isPanelDescription: true
      };
    }

    case types.SET_GAME_ITEM: {
      const { selectedGameItem } = action;
      return {
        ...state,
        selectedGameItem
      };
    }
    case types.IS_EXPANSION_PANEL_MOUNTED: {
      const { isExpansionPanelMounted } = action;
      return {
        ...state,
        isExpansionPanelMounted
      };
    }

    default:
      return state;
  }
};

export default expansionPanelReducer;
