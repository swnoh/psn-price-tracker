import {
  setSlideChunkAction,
  setShowExpansionPanelAction,
  setSelectedRowIdAction,
  setSelectedGameIdAction
} from './actions';

import mainOperations from '../../Main/duck/operations';

const setSlideChunk = slideChunk => {
  return dispatch => {
    return dispatch(setSlideChunkAction(slideChunk));
  };
};

const setShowExpansionPanel = showExpansionPanel => {
  return dispatch => {
    return dispatch(setShowExpansionPanelAction(showExpansionPanel));
  };
};

const handleExpansion = (rowid, game_id) => {
  return dispatch => {
    dispatch(setSelectedRowIdAction(rowid));
    dispatch(setSelectedGameIdAction(game_id));

    dispatch(mainOperations.fetchGameItemApiData(game_id));
    dispatch(mainOperations.fetchItemPrice(game_id));
  };
};

const handleSelectTitle = (rowid, game_id) => {
  return dispatch => {
    dispatch(setSelectedRowIdAction(rowid));
    dispatch(setSelectedGameIdAction(game_id));
  };
};

export default {
  setSlideChunk,
  setShowExpansionPanel,
  handleExpansion,
  handleSelectTitle
};
