const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
	firstName: '',
	lastName: '',
}

export default function(state = initialState, action){
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      };

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      };

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      };
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

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    dispatch({
      type: INCREMENT
    })
  }
}


export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
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


export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'
export const FIRSTNAME_ENTERED = 'counter/FIRSTNAME_ENTERED'
export const LASTNAME_ENTERED = 'counter/LASTNAME_ENTERED'
