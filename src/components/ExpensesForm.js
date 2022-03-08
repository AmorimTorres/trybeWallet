import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import expensesData from '../actions/formAction';
import fetchAPI from '../actions/apiAction';
import getCurrencies from '../services/requestAPI';

const stateAlimentacao = 'Alimentação';

class ExpensesForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id: -1,
      description: '',
      value: '',
      method: 'Dinheiro',
      tag: stateAlimentacao,
      currency: 'USD',
      exchangeRates: '',
    };
  }

  componentDidMount = () => {
    const { fetchAPIDispatch } = this.props;
    fetchAPIDispatch();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = async () => {
    const { sendExpensesDispatch } = this.props;
    const callAPI = await getCurrencies();
    this.setState((prevState) => ({
      exchangeRates: callAPI,
      id: prevState.id + 1,
    }), () => {
      sendExpensesDispatch(this.state);
      this.setState({
        description: '',
        value: '',
        method: 'Dinheiro',
        tag: stateAlimentacao,
        currency: 'USD',
        exchangeRates: '',
      });
    });
  }

  render() {
    const {
      description,
      value,
      method,
      tag,
      currency,
    } = this.state;
    const { getCurrency } = this.props;
    return (
      <form>
        <label htmlFor="value" name="value">
          Value:
          <input
            data-testid="value-input"
            type="text"
            name="value"
            onChange={ this.handleChange }
            value={ value }
          />
        </label>
        <label htmlFor="description" name="description">
          Description:
          <input
            data-testid="description-input"
            type="text"
            name="description"
            onChange={ this.handleChange }
            value={ description }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            data-testid="currency-input"
            name="currency"
            id="currency"
            label="currency"
            onChange={ this.handleChange }
            value={ currency }
          >
            {Object.keys(getCurrency).filter((curren) => (curren !== 'USDT'))
              .map((curr) => (
                <option key={ curr } label={ curr }>{curr}</option>
              ))}
          </select>
        </label>
        <label htmlFor="method">
          Payment method
          <select
            data-testid="method-input"
            name="method"
            id="method"
            label="method"
            onChange={ this.handleChange }
            value={ method }
          >
            <option value="Dinheiro'">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Category
          <select
            data-testid="tag-input"
            name="tag"
            id="tag"
            label="tag"
            onChange={ this.handleChange }
            value={ tag }
          >
            <option value="Alimentacao'">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          label="Adicionar despesa"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  getCurrency: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  sendExpensesDispatch: (state) => dispatch(expensesData(state)),
  fetchAPIDispatch: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);

ExpensesForm.propTypes = {
  sendExpensesDispatch: PropTypes.func.isRequired,
  fetchAPIDispatch: PropTypes.func.isRequired,
  getCurrency: PropTypes.oneOfType([PropTypes.object]).isRequired,
  // getCurrency: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};
