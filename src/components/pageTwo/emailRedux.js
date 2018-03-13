const initialState = {
	email: '',
	errorText: ''
};

export default function(state = initialState, action={}){
	switch (action.type) {
    case EMAIL_ENTERED:
      return {
				...state,
        email: action.email
      };
    case VALIDATION:
      return {
				...state,
        errorText: action.errorText
      };
    default:
      return state;
  }
}

export const emailEntered = (email) => {
	return {
		type: EMAIL_ENTERED,
		email: email
  }
}

export const emailValidation = (value) => {
  if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
	  return {
			type: VALIDATION,
			errorText: 'Invalid Email Format'
		}
	}
	else{
		return {
			type: VALIDATION,
			errorText: ''
		}
	}
};


export const EMAIL_ENTERED = 'email/EMAIL_ENTERED';
export const VALIDATION = 'email/VALIDATION';
