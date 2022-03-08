import { SUBMIT_LOGIN_DATA } from './index';

const loginData = (email) => ({
  type: SUBMIT_LOGIN_DATA,
  payload: email,
});

export default loginData;
