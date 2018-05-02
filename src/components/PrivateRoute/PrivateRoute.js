import React, {PureComponent} from 'react';
import UserPage from 'components/UserPage';
import {Redirect} from 'react-router-dom';
import './PrivateRoute.css';
import {connect} from 'react-redux';
import {getUsersRequest, getIsFetching, getUserProfile} from 'ducks/users';
import {getIsAuthorized, getLogout} from 'ducks/auth';
class PrivateRoute extends PureComponent {
  componentDidMount = () => {
    this.props.getUsersRequest ();
  };
  handleBtnClick = () => {
    this.props.getLogout ();
  };

  render () {
    const {isAuthorized, userProfile} = this.props;
    return (
      <main>
        <div className="btn-logout">
          <button onClick={this.handleBtnClick}>Logout</button>
        </div>
        {isAuthorized
          ? <UserPage user={userProfile} />
          : <Redirect to="/login" />}
      </main>
    );
  }
}

export default connect (
  state => ({
    userProfile: getUserProfile (state),
    isFetching: getIsFetching (state),
    isAuthorized: getIsAuthorized (state),
    // userSecret: getUserSecret(state),
  }),
  {getUsersRequest, getLogout}
) (PrivateRoute);
