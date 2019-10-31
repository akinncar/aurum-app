import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'aurum',
      storage,
      whitelist: ['auth', 'cases'],
    },
    reducers,
  );

  return persistedReducer;
};
