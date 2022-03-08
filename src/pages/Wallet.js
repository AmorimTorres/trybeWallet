import React from 'react';
import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';
import Spreadsheet from '../components/Spreadsheet';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <h1>TrybeWallet</h1>
        <Header />
        <ExpensesForm />
        <Spreadsheet />
      </div>
    );
  }
}

export default Wallet;
