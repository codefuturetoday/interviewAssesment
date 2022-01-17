import { all, fork } from 'redux-saga/effects';

import productSaga from 'Components/layout/containers/productsStore/saga';

export default function* initSaga() {
  yield all([fork(productSaga)]);
}
