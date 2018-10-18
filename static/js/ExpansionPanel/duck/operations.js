import {
  selectPanelPriceHistory,
  selectPanelMedia,
  selectPanelDescription,
  setGameItem,
  isExpansionPanelMountedAction
} from './actions';

const selectCurrentPanel = panel => {
  return dispatch => {
    switch (panel) {
      case 'Price History':
        return dispatch(selectPanelPriceHistory());
      case 'Media':
        return dispatch(selectPanelMedia());
      case 'Description':
        return dispatch(selectPanelDescription());
      default:
        return dispatch(selectPanelPriceHistory());
    }
  };
};

const selectCurrentGameItem = (
  categoryItems,
  selectedRowID,
  selectedGameID
) => {
  return dispatch => {
    let gameItemSelectedByRow = categoryItems.filter(
      categoryItem => categoryItem.category_url === selectedRowID
    )[0];

    let selectedGameItem = gameItemSelectedByRow.gameItem.filter(
      item => item.game_id === selectedGameID
    )[0];

    return dispatch(setGameItem(selectedGameItem));
  };
};

const isExpansionPanelMounted = isExpansionPanelMounted => {
  return dispatch => {
    return dispatch(isExpansionPanelMountedAction(isExpansionPanelMounted));
  };
};

export default {
  selectCurrentPanel,
  selectCurrentGameItem,
  isExpansionPanelMounted
};
