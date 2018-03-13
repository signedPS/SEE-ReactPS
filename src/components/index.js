import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import names from './names/namesRedux';
import emailAddress from './pageTwo/emailRedux';
import description from './pageThree/descriptionRedux';
import color from './pageFour/colorRedux';

export default combineReducers({
  routing: routerReducer,
  names: names,
  emailAddress: emailAddress,
  description: description,
  color: color
});
