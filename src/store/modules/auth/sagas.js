import {takeLatest, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    // Next line would pass token to header, in this case we haven't token
    // api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(signInSuccess(payload));
    Alert.alert(`Bem vindo(a), ${payload.split('@')[0].toUpperCase()}!`);
  } catch (err) {
    yield put(signFailure());
  }
}

export function signOut() {
  Alert.alert('Usuário desconectado!');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
