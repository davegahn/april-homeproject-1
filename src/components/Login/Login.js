import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';
import './Login.css';
import {getAuthRequest} from 'actions/auth';

class Login extends PureComponent {
  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.props.getAuthRequest (event.target.value);
    }
  };

  render () {
    // const isAuthorized = false;
    // const isAuthFailed = false;
    const {isAuthorized, isAuthFailed} = this.props;

    if (isAuthorized) {
      return <Redirect to="/users/me" />;
    } else {
      return (
        <div className="login">
          {isAuthFailed ? <p className="error">Bad credentials</p> : null}
          <p>
            Получить токен нужно на своей странице github, перейдите по адресу и создать себе токен. Запишите куда нибудь токен, так как после создания доступ к нему будет только один раз.
          </p>
          <input
            type="text"
            placeholder="auth_token"
            onKeyPress={this.handleKeyPress}
          />
          <p>После ввода нажать Enter</p>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  isAuthorized: state.auth.isAuthorized,
  isAuthFailed: state.auth.isAuthFailed,
  key: state.auth.key,
});

const mapDispatchToProps = {getAuthRequest};

export default connect (mapStateToProps, mapDispatchToProps) (Login);
