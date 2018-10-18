import { connect } from 'react-redux';
import MainCategory from '../components/MainCategory';
import mainOperations from '../duck/operations';

const mapStateToProps = state => {
  return {
    isGameItemApiData: state.main.isGameItemApiData,
    gameItemApiData: state.main.gameItemApiData,
    categoryItems: state.main.categoryItems,
    categoryExpansionPanel: state.main.categoryExpansionPanel,

    slideChunk: state.common.slideChunk,
    showExpansionPanel: state.common.showExpansionPanel,
    selectedRowID: state.common.selectedRowID,
    selectedGameID: state.common.selectedGameID,
    isExpansionPanelMounted: state.expansionPanel.isExpansionPanelMounted
  };
};

const mapDispatchToProps = dispatch => {
  const fetchGameItemApiData = id => {
    dispatch(mainOperations.fetchGameItemApiData(id));
  };

  const fetchItemPrice = id => {
    dispatch(mainOperations.fetchItemPrice(id));
  };

  return { fetchGameItemApiData, fetchItemPrice };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainCategory);
