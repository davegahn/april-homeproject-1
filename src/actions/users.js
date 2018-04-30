import {createActions} from 'redux-actions';

const {
  users: {
    request: getUsersRequest,
    success: getUsersSuccess,
    failure: getUsersFailure,
  },
} = createActions ({
  USERS: {
    REQUEST: null,
    SUCCESS: null,
    FAILURE: null,
  },
});

export {getUsersRequest, getUsersSuccess, getUsersFailure};
