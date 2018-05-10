import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from 'components/Login';
import PrivateRoute from 'components/PrivateRoute';
import UserPage from 'components/UserPage';
import { logout, getIsAuthorized } from 'ducks/auth';
import { getIsNetworkErrorPresent, getNetworkError } from 'ducks/network';

class AppRouter extends PureComponent {
  render() {
    const { logout, isAuthorized, isNetworkErrorPresent, networkError } = this.props;
    // если произошла сетевая ошибка - показываем networkError
    return (
      <main>
        {isAuthorized && <button onClick={this.handleBtnClick}>Logout</button>}
        {isNetworkErrorPresent && <div>{networkError}</div>}
        <Switch>
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/users/me" component={UserPage} />
          <PrivateRoute path="/users/:name" component={UserPage} />
          <Redirect to="/users/me" />
        </Switch>
      </main>
    );
  }
}
// WithRouter передает в AppRouter match, location и history
export default withRouter(
  connect(
    state => ({
      isAuthorized: getIsAuthorized(state),
      networkError: getNetworkError(state),
      isNetworkErrorPresent: getIsNetworkErrorPresent(state),
    }),
    { logout },
  )(AppRouter),
);
