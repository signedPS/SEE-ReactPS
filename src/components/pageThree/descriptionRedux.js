const initialState = {
	age: '',
	feet: '',
	inches: '',
	weight: '',
	weightErrorText: ''
};

export default function(state = initialState, action={}){
	switch (action.type) {
    case AGE_ENTERED:
      return {
				...state,
        age: action.age
      };
    case FEET_ENTERED:
      return {
				...state,
        feet: action.feet
      };
    case INCHES_ENTERED:
      return {
				...state,
        inches: action.inches
      };
    case WEIGHT_ENTERED:
      return {
				...state,
        weight: action.weight
      };
    case WEIGHT_VALIDATION:
      return {
				...state,
        weightErrorText: action.weightErrorText
      };
    default:
      return state;
  }
}

export const ageEntered = (age) => {
	return {
		type: AGE_ENTERED,
		age: age
  }
}

export const feetEntered = (feet) => {
	return {
		type: FEET_ENTERED,
		feet: feet
  }
}

export const inchesEntered = (inches) => {
	return {
		type: INCHES_ENTERED,
		inches: inches
  }
}

export const weightEntered = (weight) => {

	return {
		type: WEIGHT_ENTERED,
		weight: weight
  }
}

export const weightValidation = (weight) => {
	if(Number.isInteger(Number(weight))){
		if(weight <= 0){
	 	 return {
	 		 type: WEIGHT_VALIDATION,
	 		 weightErrorText: 'Weight must be greater than zero'
	 	 }
	  }
	  else{
	 	 return {
	 		 type: WEIGHT_VALIDATION,
	 		 weightErrorText: ''
	 	 }
	  }
	}
	else{
		return {
			type: WEIGHT_VALIDATION,
			weightErrorText: 'Weight must be a number'
		}
	}
}


export const AGE_ENTERED = 'description/AGE_ENTERED';
export const FEET_ENTERED = 'description/FEET_ENTERED';
export const INCHES_ENTERED = 'description/INCHES_ENTERED';
export const WEIGHT_ENTERED = 'description/WEIGHT_ENTERED';
export const WEIGHT_VALIDATION = 'description/WEIGHT_VALIDATION';
