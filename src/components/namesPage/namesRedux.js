const initialState = {
	firstName: '',
	lastName: '',
	errorTextFN: 'Name is required.',
	errorTextLN: 'Name is required.'
};

export default function(state = initialState, action){
  switch (action.type) {
		case FIRSTNAME_ENTERED:
			return {
				...state,
        firstName: action.name,
				errorTextFN: action.errorText,
			};
		case LASTNAME_ENTERED:
			return {
				...state,
				lastName: action.name,
        errorTextLN: action.errorText
			};
    default:
      return state;
  }
}

export const firstNameEnter = (event) => {
  if(event.length === 0){
    return {
  		type: FIRSTNAME_ENTERED,
  		name: event,
      errorText: 'Name is required.'
    }
  }
  else{
    return {
  		type: FIRSTNAME_ENTERED,
  		name: event,
      errorText: undefined
    }
  }
}

export const lastNameEnter = (event) => {
  if(event.length === 0){
    return {
  		type: LASTNAME_ENTERED,
  		name: event,
      errorText: 'Name is required.'
    }
  }
  else{
    return {
  		type: LASTNAME_ENTERED,
  		name: event,
      errorText: undefined
    }
  }
}

export const FIRSTNAME_ENTERED = 'counter/FIRSTNAME_ENTERED'
export const LASTNAME_ENTERED = 'counter/LASTNAME_ENTERED'
