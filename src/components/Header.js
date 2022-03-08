import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { getEmail, getExpenses } = this.props;
    console.log(getExpenses);
    return (
      <div>
        <div data-testid="email-field">
          User:
          {getEmail}
        </div>
        <div data-testid="total-field">
          Total:
          { getExpenses.reduce((acc, item) => (
            acc + +item.value * item.exchangeRates[item.currency].ask), 0).toFixed(2)}
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  getExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  getEmail: PropTypes.string.isRequired,
  getExpenses: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
