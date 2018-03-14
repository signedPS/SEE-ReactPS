import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import names from './namesPage/namesRedux';
import emailAddress from './emailPage/emailRedux';
import description from './descriptionPage/descriptionRedux';
import color from './colorPage/colorRedux';
import appPage from './app/appPageRedux';

export default combineReducers({
  routing: routerReducer,
  names: names,
  emailAddress: emailAddress,
  description: description,
  color: color,
  appPage: appPage
});
