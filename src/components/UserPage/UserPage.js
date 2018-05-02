import React, {PureComponent} from 'react';
import './UserPage.css';

class UserPage extends PureComponent {
  render () {
    const {user} = this.props;
    return <div className="user-info" />;
  }
}

export default UserPage;

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
