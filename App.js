import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';

import MainNavogator from './src/navigations/MainNavogator';
import store from './src/store';

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="dark-content" />
    <MainNavogator />
  </Provider>
);


export default App;
