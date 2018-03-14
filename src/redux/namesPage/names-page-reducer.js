import {
	FIRSTNAME_ENTERED,
	LASTNAME_ENTERED } from './names-page-actions';

const initialState = {
	firstName: '',
	lastName: '',
	errorTextFN: 'Name is required.',
	errorTextLN: 'Name is required.',
	validationError: false
};

export default function(state = initialState, action){
  switch (action.type) {
		case FIRSTNAME_ENTERED:
			return {
				...state,
        firstName: action.name,
				errorTextFN: action.errorText,
				validationError: action.validationError
			};
		case LASTNAME_ENTERED:
			return {
				...state,
				lastName: action.name,
        errorTextLN: action.errorText,
				validationError: action.validationError
			};
    default:
      return state;
  }
}
