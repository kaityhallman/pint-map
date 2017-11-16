import { combineReducers } from 'redux';
import plots from './plotReducer';

const pintApp = combineReducers({
  plots,
});

export default pintApp;
