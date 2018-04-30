import React, {PureComponent} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Login from 'components/Login';
import PrivateRoute from 'components/PrivateRoute';

class AppRouter extends PureComponent {
  render () {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/users/me" component={PrivateRoute} />
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}
export default AppRouter;
