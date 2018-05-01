import {combineReducers} from 'redux';
import {handleActions, createActions} from 'redux-actions';

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

const isFetching = handleActions (
  {
    [getUsersRequest]: () => true,
    [getUsersSuccess]: () => false,
    [getUsersFailure]: () => false,
  },
  false
);

const error = handleActions (
  {
    [getUsersRequest]: () => null,
    [getUsersSuccess]: () => null,
    [getUsersFailure]: (state, action) => action.payload,
  },
  null
);

const user = handleActions (
  {
    [getUsersRequest]: (state, action) => null,
    [getUsersSuccess]: (state, action) => action.payload,
  },
  null
);

export default combineReducers ({
  isFetching,
  error,
  user,
});

export {getUsersRequest, getUsersSuccess, getUsersFailure};

export const getIsFetching = state => state.users.isFetching;
export const getUser = state => state.users.user;

// import {getUsersRequest, getUsersSuccess, getUsersFailure} from 'actions/users';

// const initialState = {
//   user: {},
//   isFetching: false,
//   error: null,
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case getUsersRequest.toString ():
//       return {...state, isFetching: true};
//     case getUsersSuccess.toString ():
//       return {
//         ...state,
//         isFetching: false,
//         user: action.payload,
//       };
//     case getUsersFailure.toString ():
//       return {
//         ...state,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };
