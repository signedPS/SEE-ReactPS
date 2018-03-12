import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import names from './names';

export default combineReducers({
  routing: routerReducer,
  names
});
