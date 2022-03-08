import { SUBMIT_EXPENSES_DATA, GET_API_SUCCESS, GET_API_ERROR } from '../actions';

const INITIAL_STATE_USER = {
  currencies: [],
  expenses: [],
  errorMessage: '',
};

const wallet = (state = INITIAL_STATE_USER, action) => {
  switch (action.type) {
  case SUBMIT_EXPENSES_DATA:
    return {
      ...state,
      expenses: state.expenses.concat(action.payload),
    };
  case GET_API_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  case GET_API_ERROR:
    return {
      ...state,
      errorMessage: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
