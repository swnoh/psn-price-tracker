import { connect } from 'react-redux';
import ExpansionPanelHeader from '../components/ExpansionPanelHeader';
import commonOperations from '../../Common/duck/operations';

const mapStateToProps = state => {
  return {
    isPanelMedia: state.expansionPanel.isPanelMedia,
    isPanelDescription: state.expansionPanel.isPanelDescription,
    selectedRowID: state.main.selectedRowID,
    selectedGameID: state.main.selectedGameID,
    slideChunk: state.common.slideChunk,
    selectedGameItem: state.expansionPanel.selectedGameItem
  };
};

const mapDispatchToProps = dispatch => {
  const closeExpansionPanel = () => {
    dispatch(commonOperations.setShowExpansionPanel(false));
  };

  return { closeExpansionPanel };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpansionPanelHeader);
