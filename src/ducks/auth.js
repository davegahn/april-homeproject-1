import {getAuthRequest, getAuthSuccess, getAuthFailure} from 'actions/auth';

const initialState = {
  key: '',
  isAuthFailed: false,
  isAuthorized: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case getAuthRequest.toString ():
      return {...state, key: action.payload};
    case getAuthSuccess.toString ():
      return {
        ...state,
        isAuthorized: true,
      };
    case getAuthFailure.toString ():
      return {
        ...state,
        isAuthFailed: true,
      };
    default:
      return state;
  }
};
