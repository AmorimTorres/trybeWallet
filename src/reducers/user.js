import { SUBMIT_LOGIN_DATA } from '../actions';

const INITIAL_STATE_USER = { email: '' };

const user = (state = INITIAL_STATE_USER, action) => {
  switch (action.type) {
  case SUBMIT_LOGIN_DATA:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
