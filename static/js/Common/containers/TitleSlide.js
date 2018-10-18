import { connect } from 'react-redux';
import TitleSlide from '../components/TitleSlide';

const mapStateToProps = state => {
  return {
    slideChunk: state.common.slideChunk,
    categoryExpansionPanel: state.main.categoryExpansionPanel,
    isCategoryQuick: state.main.isCategoryQuick,
    selectedGameItem: state.expansionPanel.selectedGameItem
  };
};

export default connect(mapStateToProps)(TitleSlide);
