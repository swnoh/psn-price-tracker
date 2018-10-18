import { connect } from 'react-redux';
import ExpansionPanelMedia from '../components/ExpansionPanelMedia';

const mapStateToProps = state => {
  return {
    gameItemApiData: state.main.gameItemApiData
  };
};

export default connect(mapStateToProps)(ExpansionPanelMedia);
