import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';
import './Login.css';
import {getAuthRequest, getIsAuthorized} from 'ducks/auth';

class Login extends PureComponent {
  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.props.getAuthRequest (event.target.value);
    }
  };

  render () {
    console.log (this.props);
    const {isAuthorized} = this.props;

    if (isAuthorized) {
      return <Redirect to="/users/me" />;
    } else {
      return (
        <div className="login">
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

export default connect (
  state => ({
    isAuthorized: getIsAuthorized (state)
  }),
  {getAuthRequest}
) (Login);

// const mapStateToProps = state => ({
//   isAuthorized: state.auth.isAuthorized,
//   isAuthFailed: state.auth.isAuthFailed,
//   key: state.auth.key,
// });

// const mapDispatchToProps = {getAuthRequest};

// export default connect (mapStateToProps, mapDispatchToProps) (Login);
