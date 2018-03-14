const emailEntered = (email) => {
	if(email.length > 0){
		if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) ){
		  return {
				type: EMAIL_ENTERED,
				email: email,
				errorText: 'Invalid Email Format',
				validationError: true
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
			errorText: 'Email address is required.',
			validationError: true
	  }
	}
}

const EMAIL_ENTERED = 'email/EMAIL_ENTERED';

export {
	emailEntered,
	EMAIL_ENTERED
};
