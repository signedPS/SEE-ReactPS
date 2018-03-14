const firstNameEnter = (event) => {
  if(event.length === 0){
    return {
  		type: FIRSTNAME_ENTERED,
  		name: event,
      errorText: 'Name is required.',
			validationError: true
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

const lastNameEnter = (event) => {
  if(event.length === 0){
    return {
  		type: LASTNAME_ENTERED,
  		name: event,
      errorText: 'Name is required.',
			validationError: true
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

const FIRSTNAME_ENTERED = 'counter/FIRSTNAME_ENTERED'
const LASTNAME_ENTERED = 'counter/LASTNAME_ENTERED'

export {
	firstNameEnter,
	lastNameEnter,
	FIRSTNAME_ENTERED,
	LASTNAME_ENTERED
};
