import {combineReducers} from 'redux';

import auth from './auth/reducer';
import cases from './cases/reducer';

export default combineReducers({
  auth,
  cases,
});
