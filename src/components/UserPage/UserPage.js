import React, {PureComponent} from 'react';
import './UserPage.css';
import {connect} from 'react-redux';
import {getUsersRequest, getIsFetching, getUser} from 'ducks/users';

class UserPage extends PureComponent {
  componentDidMount = () => {
    this.props.getUsersRequest ();
  };

  render () {
    console.log (this.props);

    const {user} = this.props;
    return <div className="user-info" />;
  }
}

export default connect (
  state => ({
    user: getUser (state),
    isFetching: getIsFetching (state),
  }),
  {getUsersRequest}
) (UserPage);

// <img src={user.image} alt={user.name} />
// <div>
//   <h3>{user.name}</h3>
//   <p>{`Followers: ${user.followers}`}</p>
//   <p>{`Public repos: ${user.repos.length}`}</p>
// </div>4

// const mapStateToProps = state => ({
//   user: state.users.user,
//   isFetching: state.users.isFetching,
//   error: state.users.error,
// });

// const mapDispatchToProps = {getUsersRequest};

// export default connect (mapStateToProps, mapDispatchToProps) (UserPage);
