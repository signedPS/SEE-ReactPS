const initialState = {
	colorValue: undefined,
	colorText: undefined,
	other: false,
	errorMessage: 'Color is required.',
	colorRequired: 'Color is required.',
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
				errorMessage: action.errorMessage
      };
    case COLOR_TYPED:
      return {
				...state,
				colorText: action.colorText,
				errorMessage: action.errorMessage
      };
    default:
      return state;
  }
}

export const colorEntered = (color) => {
	if(color == 'Other'){
		return {
			type: COLOR_ENTERED,
			other: true,
			colorValue: color,
			colorRequired: undefined,
			errorMessage: 'Color is required.'
  	}
	}
	else if(color.length){
		return {
			type: COLOR_ENTERED,
			other: false,
			colorValue: color,
			colorRequired: undefined
  	}
	}
	else{
		return {
			type: COLOR_ENTERED,
			other: false,
			colorValue: color,
			colorRequired: 'Color is required.'
  	}
	}
}

export const colorTyped = (color) => {
	if(color.length > 0){
			return{
				type: COLOR_TYPED,
				colorText: color,
				errorMessage: undefined
			}
	}
	else{
			return{
				type: COLOR_TYPED,
				colorText: color,
				errorMessage: 'Color is required.'
			}
	}
}

export const COLOR_ENTERED = 'description/COLOR_ENTERED';
export const COLOR_TYPED = 'description/COLOR_TYPED';
