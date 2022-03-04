export const SUBMIT_LOGIN_DATA = 'SUBMIT_LOGIN_DATA';

const loginData = (payload) => ({
  type: SUBMIT_LOGIN_DATA,
  payload,
});

export default loginData;
