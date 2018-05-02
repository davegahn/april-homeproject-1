import {takeEvery, call, put} from 'redux-saga/effects';
import {getUsersRequest, getUsersSuccess, getUsersFailure} from 'ducks/users';
import * as api from 'api';

// Ловит все экшены getAuthRequest и вызывает исполнителя
export default function* () {
  yield takeEvery (getUsersRequest, fetchUserWatch);
}

function* fetchUserWatch (action) {
  try {
    action.payload = '52722c8519f516c8f200834cd2e8985fd619aad5';
    yield console.log (action.payload);
    const response = yield call (api.getUserInformation, action.payload);
    yield console.log (response);
    yield put (getUsersSuccess (response.data));
  } catch (error) {
    yield put (getUsersFailure (error));
  }
}
