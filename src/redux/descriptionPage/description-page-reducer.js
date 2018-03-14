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
      return {
				...state,
				ageErrorText: action.ageErrorText,
        age: action.age,
				validationError: action.validationError
      };
    case FEET_ENTERED:
      return {
				...state,
        feet: action.feet,
				feetErrorText: action.feetErrorText,
				validationError: action.validationError
      };
    case INCHES_ENTERED:
      return {
				...state,
        inches: action.inches,
				inchesErrorText: action.inchesErrorText,
				validationError: action.validationError
      };
    case WEIGHT_ENTERED:
      return {
				...state,
				weight: action.weight,
				weightErrorText: action.weightErrorText,
				validationError: action.validationError
      };
    default:
      return state;
  }
}
