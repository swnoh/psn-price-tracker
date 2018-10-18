import { connect } from 'react-redux';
import ExpansionPanelPriceHistory from '../components/ExpansionPanelPriceHistory';

const mapStateToProps = state => {
  return {
    itemPrice: state.main.itemPrice,
    selectedGameID: state.main.selectedGameID
  };
};

export default connect(mapStateToProps)(ExpansionPanelPriceHistory);
