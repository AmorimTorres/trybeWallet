import { SUBMIT_EXPENSES_DATA } from './index';

const expensesData = (expenses) => ({
  type: SUBMIT_EXPENSES_DATA,
  payload: expenses,
});

export default expensesData;
