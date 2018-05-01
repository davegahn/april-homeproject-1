import {takeEvery, call, put} from 'redux-saga/effects';
import {getAuthRequest, getAuthSuccess} from 'ducks/auth';
import * as api from 'api';
// Ловит все экшены getAuthRequest и вызывает исполнителя
export default function* () {
  yield takeEvery (getAuthRequest, authFlow);
}

//Сага исполнитель
function* authFlow (action) {
  yield call (api.setTokenApi, action.payload);
  yield put(getAuthSuccess());
}
