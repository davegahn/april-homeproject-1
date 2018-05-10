import { combineReducers } from 'redux';
import { handleActions, createActions } from 'redux-actions';

const { authorize, logout } = createActions('AUTHORIZE', 'LOGOUT');

const isAuthorized = handleActions(
  {
    [authorize]: () => true,
    [logout]: () => false,
  },
  false,
);

export default combineReducers({
  isAuthorized,
});

export { authorize, logout };

export const getIsAuthorized = state => state.auth.isAuthorized;

//-------------------------------------------------------------------------------------------------------------------

// import {getAuthRequest, getAuthSuccess, getAuthFailure} from 'actions/auth';

// const initialState = {
//   key: '',
//   isAuthFailed: false,
//   isAuthorized: false,
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case getAuthRequest.toString ():
//       return {...state, key: action.payload};
//     case getAuthSuccess.toString ():
//       return {
//         ...state,
//         isAuthorized: true,
//       };
//     case getAuthFailure.toString ():
//       return {
//         ...state,
//         isAuthFailed: true,
//       };
//     default:
//       return state;
//   }
// };
