import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { GET_PRODUCTS, API_URL } from './consts';
import { ActionWithDataType } from './types';

import { getProductsSuccess, getProductsFail } from './actions';

function* getProductsSaga() {
  try {
    const response: ActionWithDataType = yield call(axios.get, API_URL);
    yield put(getProductsSuccess(response.data));
  } catch (e) {
    yield put(getProductsFail());
  }
}

function* productSaga() {
  yield takeEvery(GET_PRODUCTS, getProductsSaga);
}

export default productSaga;
