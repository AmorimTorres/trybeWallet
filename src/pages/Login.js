import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loginData from '../actions/loginAction';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  isDisabled = () => {
    const PASSWORD_LENGTH = 6;
    const regex = /^\S+@\S+\.\S+$/;
    const { email, password } = this.state;
    return (
      email !== ''
      && regex.test(email)
      && password.length >= PASSWORD_LENGTH
    );
  }

  handleClick = () => {
    const { email } = this.state;
    const { sendEmail, history } = this.props;
    sendEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    return (
      <fieldset>
        <label htmlFor="email">
          {' '}
          Email
          <input
            data-testid="email-input"
            name="email"
            type="text"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>
        <label htmlFor="password">
          {' '}
          Password
          <input
            data-testid="password-input"
            name="password"
            type="password"
            onChange={ this.handleChange }
            value={ password }
          />
        </label>
        <button
          type="button"
          label="Entrar"
          disabled={ !this.isDisabled() }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendEmail: (email) => dispatch(loginData(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  sendEmail: PropTypes.func.isRequired,
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
