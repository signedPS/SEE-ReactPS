import { EMAIL_ENTERED } from './email-page-actions';

const initialState = {
	email: '',
	errorText: 'Email address is required.',
	validationError: false
};

export default function(state = initialState, action={}){
	switch (action.type) {
    case EMAIL_ENTERED:
      return {
        email: action.email,
				errorText: action.errorText,
				validationError: action.validationError
      };
    default:
      return state;
  }
}
