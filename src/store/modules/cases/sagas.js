import {call, put, all, takeLatest} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '~/services/api';

import {casesSuccess} from './actions';

export function* casesRequest() {
  try {
    const response = yield call(api.get, '/lawsuit/all');

    yield put(casesSuccess(response.data));
  } catch (error) {
    yield put(
      Alert.alert(
        'Não foi possível buscar os processos',
        'Ocorreu algum erro ao tentar realizar a listagem dos processos.',
      ),
    );
  }
}

export default all([takeLatest('@cases/CASES_REQUEST', casesRequest)]);
