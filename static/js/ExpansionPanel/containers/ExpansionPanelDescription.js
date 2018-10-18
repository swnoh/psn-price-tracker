import { connect } from 'react-redux';
import ExpansionPanelDescription from '../components/ExpansionPanelDescription';

const mapStateToProps = (state) => {

    return {
        gameItemApiData: state.main.gameItemApiData
    }
}

export default connect(mapStateToProps)(ExpansionPanelDescription);