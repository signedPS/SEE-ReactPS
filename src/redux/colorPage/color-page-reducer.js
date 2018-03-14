import {
COLOR_ENTERED,
COLOR_TYPED
} from './color-page-actions';

const initialState = {
	colorValue: undefined,
	colorText: undefined,
	other: false,
	errorMessage: 'Color is required.',
	colorRequired: 'Color is required.',
	validationError: false
};

export default function(state = initialState, action={}){
	switch (action.type) {
    case COLOR_ENTERED:
      return {
				...state,
				other: action.other,
        colorValue: action.colorValue,
				colorText: undefined,
				colorRequired: action.colorRequired,
				errorMessage: action.errorMessage,
				validationError: action.validationError
      };
    case COLOR_TYPED:
      return {
				...state,
				colorText: action.colorText,
				errorMessage: action.errorMessage,
				validationError: action.validationError
      };
    default:
      return state;
  }
}
