import types from './types';

export const selectPanelPriceHistory = () => ({
  type: types.SELECT_PANEL_PRICE_HISTORY
});

export const selectPanelMedia = () => ({
  type: types.SELECT_PANEL_MEDIA
});

export const selectPanelDescription = () => ({
  type: types.SELECT_PANEL_DESCRIPTION
});

export const setGameItem = selectedGameItem => ({
  type: types.SET_GAME_ITEM,
  selectedGameItem: selectedGameItem
});

export const isExpansionPanelMountedAction = isExpansionPanelMounted => ({
  type: types.IS_EXPANSION_PANEL_MOUNTED,
  isExpansionPanelMounted: isExpansionPanelMounted
});
