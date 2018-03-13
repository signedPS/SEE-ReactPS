const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
	firstName: '',
	lastName: '',
};

export default function(state = initialState, action){
  switch (action.type) {
		case FIRSTNAME_ENTERED:
			return {
				...state,
				firstName: action.name
			};
		case LASTNAME_ENTERED:
			return {
				...state,
				lastName: action.name
			};
    default:
      return state;
  }
}

export const firstNameEnter = (event) => {
	return {
		type: FIRSTNAME_ENTERED,
		name: event
  }
}

export const lastNameEnter = (event) => {
	return {
		type: LASTNAME_ENTERED,
		name: event
  }
}

export const FIRSTNAME_ENTERED = 'counter/FIRSTNAME_ENTERED'
export const LASTNAME_ENTERED = 'counter/LASTNAME_ENTERED'
