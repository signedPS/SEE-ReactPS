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
			if(action.validationError !== undefined){
				return {
					...state,
	        firstName: action.name,
					errorTextFN: action.errorText,
					validationError: action.validationError
				};
			}
			else{
				return{
					...state,
	        firstName: action.name,
					errorTextFN: action.errorText,
					validationError: (state.errorTextLN ? true : false)
				}
			}
		case LASTNAME_ENTERED:
			if(action.validationError !== undefined){
					return {
						...state,
						lastName: action.name,
		        errorTextLN: action.errorText,
						validationError: action.validationError
					};
				}
			else{
				return{
					...state,
					lastName: action.name,
					errorTextLN: action.errorText,
					validationError: (state.errorTextFN ? true : false)
				}
			}
    default:
      return state;
  }
}
