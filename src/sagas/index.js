import {fork} from 'redux-saga/effects';
import fetchUserWatch from './users';
import authFlow from './auth';

// Cобирает все саги в одну
export default function* () {
  yield fork (authFlow);
  yield fork (fetchUserWatch);
}
