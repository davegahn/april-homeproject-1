import { takeEvery, call, put, select, take } from 'redux-saga/effects';
import { getAuthRequest, getAuthSuccess, setAuthLogout } from 'ducks/auth';
import * as api from 'api';
// Ловит все экшены getAuthRequest и вызывает исполнителя
export default function*() {
  yield takeEvery(getAuthRequest, authFlow);
}

//Сага исполнитель
// function* authFlow (action) {
//   yield call (api.setTokenApi, action.payload);
//   yield put(getAuthSuccess());
// }

const getTokenFromLocalStorage = key => localStorage.getItem(key);
const setTokenToLocalStorage = (key, value) => localStorage.setItem(key, value);
const removeTokenFromLocalStorage = key => localStorage.removeItem(key);

function* authFlow(action) {
  console.log('authFlow');

  while (true) {
    const isAuthorized = yield select(getAuthRequest);
    const localStorageToken = yield call(getTokenFromLocalStorage, token);
    let token;

    if (!isAuthorized && localStorageToken) {
      token = localStorageToken;
      yield put(getAuthRequest);
    } else {
      const action = yield take(getAuthRequest);
      token = action.payload;
    }

    yield call(api.setTokenApi, token);
    yield call(setTokenToLocalStorage, token, action.payload);

    yield take(setAuthLogout);

    yield call(removeTokenFromLocalStorage, token);
    yield call(api.clearTokenApi);
  }
}
