import { combineReducers } from 'redux';
import plotReducer from './plotReducer';

const pintApp = combineReducers({
  plotReducer,
});

export default pintApp;
