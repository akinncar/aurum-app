import {combineReducers} from 'redux';

import auth from './auth/reducer';
import cases from './cases/reducer';
import files from './files/reducer';

export default combineReducers({
  auth,
  cases,
  files,
});
