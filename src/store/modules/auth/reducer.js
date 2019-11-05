import {Platform} from 'react-native';
import produce from 'immer';

const INITIAL_STATE = {
  signed: Platform.OS !== 'ios' ? true : false,
  email: '',
};

export default function auth(state = INITIAL_STATE, actions) {
  return produce(state, draft => {
    console.tron.log(Platform);
    switch (actions.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.signed = true;
        draft.email = actions.payload;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.signed = false;
        break;
      }
      default:
    }
  });
}
