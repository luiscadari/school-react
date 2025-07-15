import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as actions from './actions';
import * as types from '../types';

const response = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello World');
    }, 2000);
  });

function* exampleRequest() {
  try {
    yield call(response);
    yield put(actions.clickedButtonSuccess());
  } catch (e) {
    console.error(e);
    yield put(actions.clickedButtonFailure());
  }
}

export default all([takeLatest(types.BUTTON_CLICK_REQUEST, exampleRequest)]);
