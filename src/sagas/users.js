import { select, take, call, fork, put } from 'redux-saga/effects';
import { getUserSecretRequest, getUserSecretSuccess, getUserSecretFailure } from 'ducks/users';
import * as api from 'api';

export default function* fetchUserWatch() {
  yield console.log('fetchUserWatch');
  // try {
  //   const userData = yield call(api.getUserInformation, action.payload); //передать логин
  //   yield console.log(userData);
  //   yield put(getUserSecretSuccess(token.data));
  // } catch (error) {
  //   yield put(getUserSecretFailure(error));
  // }
}
