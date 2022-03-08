import React from 'react';

class Spreadsheet extends React.Component {
  render() {
    return (
      <table border="1">
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
      </table>
    );
  }
}

export default Spreadsheet;

/* Spreadsheet.propTypes = {
    getEmail: PropTypes.string.isRequired,
    getExpenses: PropTypes.oneOfType([PropTypes.object]).isRequired,
  }; */
