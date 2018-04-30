import React, {PureComponent} from 'react';
import UserPage from 'components/UserPage';
import {Redirect} from 'react-router-dom';
import './PrivateRoute.css';

class PrivateRoute extends PureComponent {
  buttonHandler = () => {};

  render () {
    // const {isAuthorized} = this.props;
    const isAuthorized = true;
    return (
      <main>
        <div className="btn-logout">
          <button onClick={this.buttonHandler}>Logout</button>
        </div>
        {isAuthorized ? <UserPage /> : <Redirect to="/login" />}
      </main>
    );
  }
}

export default PrivateRoute;
