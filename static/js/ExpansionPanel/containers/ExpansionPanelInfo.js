import { connect } from 'react-redux';
import ExpansionPanelInfo from '../components/ExpansionPanelInfo';

const mapStateToProps = state => {
  return {
    isPanelMedia: state.expansionPanel.isPanelMedia,
    isPanelDescription: state.expansionPanel.isPanelDescription,
    gameItemApiData: state.main.gameItemApiData,
    selectedGameItem: state.expansionPanel.selectedGameItem,
    slideChunk: state.common.slideChunk
  };
};

export default connect(mapStateToProps)(ExpansionPanelInfo);
