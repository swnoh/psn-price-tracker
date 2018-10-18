import types from './types';

export const setSlideChunkAction = slideChunk => ({
  type: types.SET_SLIDE_CHUNK,
  slideChunk: slideChunk
});

export const setShowExpansionPanelAction = showExpansionPanel => ({
  type: types.SET_TOGGLE_SHOW_EXPANSION_PANEL,
  showExpansionPanel: showExpansionPanel
});

export const setSelectedRowIdAction = data => ({
  type: types.SET_SELECTED_ROW_ID,
  selectedRowID: data
});

export const setSelectedGameIdAction = data => ({
  type: types.SET_SELECTED_GAME_ID,
  selectedGameID: data
});
