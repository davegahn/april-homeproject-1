import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './UserPage.css';
import { getUser, getIsFetching, getIsFetched } from 'ducks/users';

import { fetchUserRequest, fetchTokenOwnerRequest } from 'ducks/followers';

import Spinner from 'react-svg-spinner';
import { Followers } from 'components/Followers';

class UserPage extends PureComponent {
  constructor(props) {
    super(props);
    const {
      fetchTokenOwnerRequest,
      fetchUserRequest,
      match: {
        params: { name },
      },
    } = this.props;
    if (name === null) fetchTokenOwnerRequest();
    else fetchUserRequest(name);
  }

  conponentDidUpdate(prevProps) {
    const {
      fetchTokenOwnerRequest,
      fetchUserRequest,
      match: {
        params: { name },
      },
    } = this.props;

    if (name !== prevProps.match.params.name) {
      if (name == null) fetchTokenOwnerRequest();
      else fetchUserRequest(name);
    }
  }

  render() {
    const {
      user,
      match: {
        params: { name },
      },
      isFetching,
      isFetched,
    } = this.props;

    if (isFetching || !isFetched) {
      return <Spinner size="64px" color="fuchsia" gap={5} />;
    }
    if (!user) {
      return <p>User {name} not found!</p>;
    }
    return (
      <div>
        <div>
          <img src={user.avatar.url} alt={user.login} />
          <div>
            <h3>{user.login}</h3>
            <p>Followers: {user.followers}</p>
            <p>Public repos: {user.public_repos}</p>
          </div>
        </div>
        <Followers login={user.login} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: getUser(state),
  isFetching: getIsFetching(state),
  isFetched: getIsFetched(state),
});

export default connect(mapStateToProps, { fetchUserRequest, fetchTokenOwnerRequest })(UserPage);
