import {takeEvery, call, put} from 'redux-saga/effects';
import {getUsersRequest, getUsersSuccess, getUsersFailure} from 'ducks/users';
import * as api from 'api';

// Ловит все экшены getAuthRequest и вызывает исполнителя
export default function* () {
  yield takeEvery (getUsersRequest, fetchUserWatch);
}

function* fetchUserWatch (action) {
  try {
    const response = yield call (api.getUserInformation, action.payload);
    yield console.log (response);
    yield put (getUsersSuccess (response));
  } catch (error) {
    yield put (getUsersFailure (error));
  }
}
