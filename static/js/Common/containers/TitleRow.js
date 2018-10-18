import { connect } from 'react-redux';
import TitleRow from '../components/TitleRow';
import commonOperations from '../duck/operations';

const mapStateToProps = (state, props) => {
  return {
    slideChunk: state.common.slideChunk,
    showExpansionPanel: state.common.showExpansionPanel,
    selectedRowID: state.common.selectedRowID,
    selectedGameID: state.common.selectedGameID,
    isHoverOn: state.common.isHoverOn,
    currentIdx: state.common.currentIdx,
    isCategoryQuick: state.main.isCategoryQuick
  };
};

const mapDispatchToProps = dispatch => {
  const handleExpansion = (rowid, game_id) => {
    dispatch(commonOperations.handleExpansion(rowid, game_id));
  };

  const handleSelectTitle = (rowid, game_id) => {
    dispatch(commonOperations.handleSelectTitle(rowid, game_id));
  };

  const setShowExpansionPanel = showExpansionPanel => {
    dispatch(commonOperations.setShowExpansionPanel(showExpansionPanel));
  };

  const handleHoverOn = (currentRowIdx, currentIdx) => {
    dispatch(commonOperations.handleHoverOn(currentRowIdx, currentIdx));
  };

  const handleHoverOff = rowid => {
    dispatch(commonOperations.handleHoverOff(rowid));
  };

  return {
    handleExpansion,
    handleSelectTitle,
    setShowExpansionPanel,
    handleHoverOn,
    handleHoverOff
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleRow);
