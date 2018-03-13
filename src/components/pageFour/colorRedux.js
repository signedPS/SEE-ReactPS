const initialState = {
	colorValue: '',
	other: false
};

export default function(state = initialState, action={}){
	switch (action.type) {
    case COLOR_ENTERED:
      return {
				...state,
				other: action.other,
        colorValue: action.colorValue
      };
    default:
      return state;
  }
}

export const colorEntered = (color) => {
	if(color == 'Other'){
		console.log(color);
		return {
			type: COLOR_ENTERED,
			other: true,
			colorValue: color
  	}
	}
	else{
		return {
			type: COLOR_ENTERED,
			other: false,
			colorValue: color
  	}
	}
}


export const COLOR_ENTERED = 'description/COLOR_ENTERED';
