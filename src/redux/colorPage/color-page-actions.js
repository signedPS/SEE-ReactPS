const colorEntered = (color) => {
	if(color == 'Other'){
		return {
			type: COLOR_ENTERED,
			other: true,
			colorValue: color,
			colorRequired: undefined,
			errorMessage: 'Color is required.',
			validationError: true
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
			colorRequired: 'Color is required.',
			validationError: true
  	}
	}
}

const colorTyped = (color) => {
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
				errorMessage: 'Color is required.',
				validationError: true
			}
	}
}

const COLOR_ENTERED = 'description/COLOR_ENTERED';
const COLOR_TYPED = 'description/COLOR_TYPED';

export {
	colorEntered,
	colorTyped,
	COLOR_ENTERED,
	COLOR_TYPED
};
