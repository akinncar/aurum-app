import {all} from 'redux-saga/effects';

import auth from './auth/sagas';
import cases from './cases/sagas';
import files from './files/sagas';

export default function* rootSaga() {
  yield all([auth]);
  yield all([cases]);
  yield all([files]);
}
