import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Login.css';
import { authorize, getIsAuthorized } from 'ducks/auth';
class Login extends Component {
  state = {
    input: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ input: value });
  };

  handleKeyPress = event => {
    const { authorize } = this.props;
    if (event.nativeEvevt.keyCode === 13) {
      authorize(this.state.input);
    }
  };

  render() {
    const { input } = this.state;
    const { isAuthorize } = this.props;
    if (!isAuthorize) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login">
        <p>
          Получить токен нужно на своей странице github, перейдите по{' '}
          <a href="https://github.com/settings/tokens">адресу</a> и создать себе токен. Запишите
          куда нибудь токен, так как после создания доступ к нему будет только один раз.
        </p>
        <input
          type="text"
          placeholder="auth_token"
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
          value={input}
        />
        <p>После ввода нажать Enter</p>
      </div>
    );
  }
}

export default connect(
  state => ({
    isAuthorize: getIsAuthorized(state),
  }),
  { authorize },
)(Login);
