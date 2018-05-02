import {handleActions, createActions} from 'redux-actions';
import {combineReducers} from 'redux';

const {
  auth: {request: getAuthRequest, success: getAuthSuccess, logout},
} = createActions ({
  AUTH: {
    REQUEST: null,
    SUCCESS: null,
    LOGOUT: null,
  },
});

export const key = handleActions (
  {
    [getAuthRequest]: (state, action) => action.payload, // сохранили в redux введенные данные
  },
  null
); //  вторым аргументом  - значение initialState

export const isAuthorized = handleActions (
  {
    [getAuthRequest]: () => false,
    [getAuthSuccess]: () => true,
    [logout]: () => false,
  },
  true // !!!! false
);

export default combineReducers ({key, isAuthorized}); //экспорт редюсеров

export {getAuthRequest, getAuthSuccess}; // экспорт экшенов

export const getIsAuthorized = state => state.auth.isAuthorized; // экспорт селекторов
export const getLogout = state => state.auth.logout;

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
