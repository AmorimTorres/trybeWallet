import { REQUEST_API, GET_API_SUCCESS, GET_API_ERROR } from './index';
import getCurrencies from '../services/requestAPI';

const requestAPI = () => ({
  type: REQUEST_API,
});

const getAPISuccess = (currencies) => ({
  type: GET_API_SUCCESS,
  payload: currencies,
});

const getAPIError = (error) => ({
  type: GET_API_ERROR,
  payload: error,
});

const fetchAPI = () => async (dispatch) => {
  dispatch(requestAPI());
  try {
    const currencies = await getCurrencies();
    dispatch(getAPISuccess(currencies));
  } catch (error) {
    dispatch(getAPIError(error.message));
  }
};

export default fetchAPI;
