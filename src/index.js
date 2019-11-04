import React from 'react';
import {StatusBar} from 'react-native';

import '~/config/ReactotronConfig';

import {Provider} from 'react-redux';
import store from './store';

import App from '~/App';

import color from '~/styles/colors';

export default function Index() {
  console.disableYellowBox = true;

  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={color.primary} />
      <App />
    </Provider>
  );
}
