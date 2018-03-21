import {
AGE_ENTERED,
FEET_ENTERED,
INCHES_ENTERED,
WEIGHT_ENTERED} from './description-page-actions';

const initialState = {
	age: '',
	feet: '',
	inches: '',
	weight: '',
	weightErrorText: undefined,
	ageErrorText: 'Age required',
	inchesErrorText: 'Height required',
	feetErrorText: 'Height required',
	validationError: false
};

export default function(state = initialState, action={}){
	switch (action.type) {
    case AGE_ENTERED:
			if(action.validationError !== undefined){
	      return {
					...state,
					ageErrorText: action.ageErrorText,
	        age: action.age,
					validationError: action.validationError
	      };
			}
			else{
				return {
					...state,
					ageErrorText: action.ageErrorText,
	        age: action.age,
					validationError: (
						state.weightErrorText ? true : false ||
						state.inchesErrorText ? true : false ||
						state.feetErrorText ? true : false)
	      };
			}
    case FEET_ENTERED:
			if(action.validationError !== undefined){
	      return {
					...state,
	        feet: action.feet,
					feetErrorText: action.feetErrorText,
					validationError: action.validationError
	      };
			}
			else{
				return{
					...state,
					feet: action.feet,
					feetErrorText: action.feetErrorText,
					validationError: (
						state.weightErrorText ? true : false ||
						state.ageErrorText ? true : false ||
						state.inchesErrorText ? true : false)
				}
			}
    case INCHES_ENTERED:
			if(action.validationError !== undefined){
	      return {
					...state,
	        inches: action.inches,
					inchesErrorText: action.inchesErrorText,
					validationError: action.validationError
	      };
			}
			else{
				return{
					...state,
					inches: action.inches,
					inchesErrorText: action.inchesErrorText,
					validationError: (
						state.weightErrorText ? true : false ||
						state.ageErrorText ? true : false ||
						state.feetErrorText ? true : false)
				}
			}
    case WEIGHT_ENTERED:
			if(action.validationError !== undefined){
	      return {
					...state,
					weight: action.weight,
					weightErrorText: action.weightErrorText,
					validationError: action.validationError
	      };
			}
			else{
				return{
					...state,
					weight: action.weight,
					weightErrorText: action.weightErrorText,
					validationError: (
						state.ageErrorText ? true : false ||
						state.inchesErrorText ? true : false ||
						state.feetErrorText ? true : false )
				}
			}
    default:
      return state;
  }
}
