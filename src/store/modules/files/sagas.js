import {put, all, takeLatest} from 'redux-saga/effects';
import {Alert} from 'react-native';

import {uploadFileSuccess} from './actions';

export function* uploadFile({payload}) {
  try {
    yield put(uploadFileSuccess(payload));
  } catch (error) {
    yield put(
      Alert.alert(
        'Não foi adicionar o arquivo selecionado',
        'Ocorreu algum erro ao tentar vincular o arquivo selecionado ao processo.',
      ),
    );
  }
}

export default all([takeLatest('@files/UPLOAD_FILE', uploadFile)]);
