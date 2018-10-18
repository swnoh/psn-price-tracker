import types from './types';

const INITIAL_STATE = {
  slideChunk: 10,
  showExpansionPanel: false,
  selectedRowID: '',
  selectedGameID: ''
};
const commonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_SLIDE_CHUNK: {
      return {
        ...state,
        slideChunk: action.slideChunk
      };
    }

    case types.SET_TOGGLE_SHOW_EXPANSION_PANEL: {
      const { showExpansionPanel } = action;
      return {
        ...state,
        showExpansionPanel
      };
    }

    case types.SET_SELECTED_ROW_ID: {
      const { selectedRowID } = action;
      return {
        ...state,
        selectedRowID
      };
    }

    case types.SET_SELECTED_GAME_ID: {
      const { selectedGameID } = action;
      return {
        ...state,
        selectedGameID
      };
    }

    default:
      return state;
  }
};

export default commonReducer;
