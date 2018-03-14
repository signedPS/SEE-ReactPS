const initialState = {
	email: '',
	errorText: 'Email address is required.'
};

export default function(state = initialState, action={}){
	switch (action.type) {
    case EMAIL_ENTERED:
      return {
        email: action.email,
				errorText: action.errorText
      };
    default:
      return state;
  }
}

export const emailEntered = (email) => {
	if(email.length > 0){
		if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) ){
		  return {
				type: EMAIL_ENTERED,
				email: email,
				errorText: 'Invalid Email Format'
			}
		}
		else{
			return {
				type: EMAIL_ENTERED,
				email: email,
				errorText: undefined
		  }
		}
	}
	else{
		return {
			type: EMAIL_ENTERED,
			email: email,
			errorText: 'Email address is required.'
	  }
	}
}

export const EMAIL_ENTERED = 'email/EMAIL_ENTERED';
