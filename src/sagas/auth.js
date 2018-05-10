import { select, take, call, fork, put } from 'redux-saga/effects';
import { getIsAuthorized, authorize, logout } from 'ducks/auth';
import { getIsNetworkErrorPresent, getNetworkError } from 'ducks/network';
import * as api from 'api';

const getTokenFromLocalStorage = () => localStorage.getItem('access_token');
const setTokenToLocalStorage = value => localStorage.setItem('access_token', value);
const removeTokenFromLocalStorage = () => localStorage.removeItem('access_token');

export default function* authFlow() {
  while (true) {
    const isAuthorized = yield select(getIsAuthorized);
    const localStorageToken = yield call(getTokenFromLocalStorage);
    let token;

    if (!isAuthorized && localStorageToken) {
      token = localStorageToken;
      yield put(authorize());
    } else {
      const action = yield take(authorize);
      token = action.payload;
    }

    yield call(api.setTokenApi, token);
    yield call(setTokenToLocalStorage, token);

    yield take(logout);

    yield call(removeTokenFromLocalStorage);
    yield call(api.clearTokenApi);
  }
}

// export default function* authFlow() {
//   const isAuthorized = yield select(getIsAuthorized);
// while (true) {
//   const isAuthorized = yield select(getIsAuthorized); // выбрать флаг из состояния
//   const localStorageToken = yield call(getTokenFromLocalStorage);
//   let token;

//   // Если ключ в сторадже - то вызывай экшен авторизации, если нет - бери ключ из экшена
//   if (!isAuthorized && localStorageToken) {
//     token = localStorageToken;
//     yield put(authorize());
//   } else {
//     const action = yield take(authorize); // жди экшен
//     token = action.payload;
//   }

// yield call(api.setTokenApi, token);
// yield call(setTokenToLocalStorage, token);

// yield fork(sagaAuthorize, token);

// const actions = yield take([getAuthSuccess, getAuthFailure]);

// if (actions.type === getAuthSuccess.toString()) {
//   // yield put(getUserSecretRequest(actions.payload)); // помести в хранилище данные
//   yield put(getuserProfile(actions.payload));
// } else {
//   continue;
// }

// yield take(logout);
// yield call(removeTokenFromLocalStorage);
// yield call(api.clearTokenApi);
// }
// }

// function* sagaAuthorize(token) {
//   try {
//     const tokenOwner = yield call(api.getTokenOwner, token);
//     yield put(getAuthSuccess(tokenOwner.data.user));
//   } catch (error) {
//     yield put(getAuthFailure(error));
//   }
// }
