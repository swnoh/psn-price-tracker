import { connect } from 'react-redux';

import expansionPanelOperations from '../duck/operations';
import ExpansionPanel from '../components/ExpansionPanel';

const mapStateToProps = state => {
  return {
    isGameItemApiData: state.main.isGameItemApiData,
    gameItemApiData: state.main.gameItemApiData,
    isItemPrice: state.main.isItemPrice,
    itemPrice: state.main.itemPrice,
    isPanelPriceHistory: state.expansionPanel.isPanelPriceHistory,
    isPanelMedia: state.expansionPanel.isPanelMedia,
    isPanelDescription: state.expansionPanel.isPanelDescription,

    categoryItems: state.main.categoryItems,
    selectedRowID: state.common.selectedRowID,
    selectedGameID: state.common.selectedGameID
  };
};

const mapDispatchToProps = dispatch => {
  const selectCurrentPanel = panel => {
    dispatch(expansionPanelOperations.selectCurrentPanel(panel));
  };

  const selectCurrentGameItem = (
    categoryItems,
    selectedRowID,
    selectedGameID
  ) => {
    dispatch(
      expansionPanelOperations.selectCurrentGameItem(
        categoryItems,
        selectedRowID,
        selectedGameID
      )
    );
  };

  const isExpansionPanelMounted = isExpansionPanelMounted => {
    dispatch(
      expansionPanelOperations.isExpansionPanelMounted(isExpansionPanelMounted)
    );
  };

  return { selectCurrentPanel, selectCurrentGameItem, isExpansionPanelMounted };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpansionPanel);