import { combineReducers } from 'redux';
import commonReducer from './Common/duck/reducers';
import expansionPanelReducer from './ExpansionPanel/duck/reducers';
import mainReducer from './Main/duck/reducers';

const rootReducer = combineReducers({
  common: commonReducer,
  expansionPanel: expansionPanelReducer,
  main: mainReducer
});

export default rootReducer;
