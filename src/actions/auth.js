import {createActions} from 'redux-actions';

const {
  auth: {
    request: getAuthRequest,
    success: getAuthSuccess,
    failure: getAuthFailure,
  },
} = createActions ({
  AUTH: {
    REQUEST: null,
    SUCCESS: null,
    FAILURE: null,
  },
});

export {getAuthRequest, getAuthSuccess, getAuthFailure};
