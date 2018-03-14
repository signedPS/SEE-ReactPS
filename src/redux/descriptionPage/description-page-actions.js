const ageEntered = (age) => {
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
			ageErrorText: 'Age required',
			validationError: true
	  }
	}
}

const feetEntered = (feet) => {
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
			feetErrorText: 'Height required',
			validationError: true
	  }
	}
}

const inchesEntered = (inches) => {
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
			inchesErrorText: 'Height required',
			validationError: true
	  }
	}
}

const weightEntered = (weight) => {
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


const AGE_ENTERED = 'description/AGE_ENTERED';
const FEET_ENTERED = 'description/FEET_ENTERED';
const INCHES_ENTERED = 'description/INCHES_ENTERED';
const WEIGHT_ENTERED = 'description/WEIGHT_ENTERED';

export {
	ageEntered,
	feetEntered,
	inchesEntered,
	weightEntered,
	AGE_ENTERED,
	FEET_ENTERED,
	INCHES_ENTERED,
	WEIGHT_ENTERED
};
