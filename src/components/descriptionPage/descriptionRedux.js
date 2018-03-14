const initialState = {
	age: '',
	feet: '',
	inches: '',
	weight: '',
	weightErrorText: undefined,
	ageErrorText: 'Age required',
	inchesErrorText: 'Height required',
	feetErrorText: 'Height required'
};

export default function(state = initialState, action={}){
	switch (action.type) {
    case AGE_ENTERED:
      return {
				...state,
				ageErrorText: action.ageErrorText,
        age: action.age
      };
    case FEET_ENTERED:
      return {
				...state,
        feet: action.feet,
				feetErrorText: action.feetErrorText
      };
    case INCHES_ENTERED:
      return {
				...state,
        inches: action.inches,
				inchesErrorText: action.inchesErrorText
      };
    case WEIGHT_ENTERED:
      return {
				...state,
				weight: action.weight,
				weightErrorText: action.weightErrorText
      };
    default:
      return state;
  }
}

export const ageEntered = (age) => {
	if(age.length){
		return {
			type: AGE_ENTERED,
			age: age,
			ageErrorText: undefined
	  }
	}
	else{
		return {
			type: AGE_ENTERED,
			age: age,
			ageErrorText: 'Age required'
	  }
	}
}

export const feetEntered = (feet) => {
	if(Number.isInteger(feet)){
		return {
			type: FEET_ENTERED,
			feet: feet,
			feetErrorText: undefined
	  }
	}
	else{
		return {
			type: FEET_ENTERED,
			feet: feet,
			feetErrorText: 'Height required'
	  }
	}
}

export const inchesEntered = (inches) => {
	if(Number.isInteger(inches)){
		return {
			type: INCHES_ENTERED,
			inches: inches,
			feetErrorText: undefined
	  }
	}
	else{
		return {
			type: INCHES_ENTERED,
			inches: inches,
			inchesErrorText: 'Height required'
	  }
	}
}

export const weightEntered = (weight) => {
	console.log(Number(weight));
	if(Number.isInteger(Number(weight))){
		if(Number(weight) < 0 ){
	 	 return {
				type: WEIGHT_ENTERED,
	 			weight: weight,
	 		 	weightErrorText: 'Weight must be greater than zero'
	 	 }
	  }
	  else{
			return {
				type: WEIGHT_ENTERED,
	 			weight: weight,
				weightErrorText: undefined
	 	 }
	  }
	}
	else{
		return {
			type: WEIGHT_ENTERED,
			weight: weight,
			weightErrorText: 'Weight must be a number'
		}
	}
}


export const AGE_ENTERED = 'description/AGE_ENTERED';
export const FEET_ENTERED = 'description/FEET_ENTERED';
export const INCHES_ENTERED = 'description/INCHES_ENTERED';
export const WEIGHT_ENTERED = 'description/WEIGHT_ENTERED';
