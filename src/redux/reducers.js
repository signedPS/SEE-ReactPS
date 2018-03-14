import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import names from './namesPage/names-page-reducer';
import emailAddress from './emailPage/email-page-reducer';
import description from './descriptionPage/description-page-reducer';
import color from './colorPage/color-page-reducer';

export default combineReducers({
  routing: routerReducer,
  names: names,
  emailAddress: emailAddress,
  description: description,
  color: color
});
