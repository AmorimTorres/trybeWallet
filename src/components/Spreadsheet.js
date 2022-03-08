import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Spreadsheet extends React.Component {
  render() {
    const { getExpensesInfos } = this.props;
    console.log(getExpensesInfos);
    return (
      <table border="2">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {getExpensesInfos.map((item) => (
            <tr key={ item.id }>
              <td>{item.description}</td>
              <td>{item.tag}</td>
              <td>{item.method}</td>
              <td>{(+item.value).toFixed(2)}</td>
              <td>{item.exchangeRates[item.currency].name}</td>
              <td>{(+item.exchangeRates[item.currency].ask).toFixed(2)}</td>
              <td>
                {(+item.exchangeRates[item.currency].ask * +item.value)
                  .toFixed(2) }

              </td>
              <td>Real</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Spreadsheet.propTypes = {
  getExpensesInfos: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = (state) => ({
  getExpensesInfos: state.wallet.expenses,
});

export default connect(mapStateToProps)(Spreadsheet);
