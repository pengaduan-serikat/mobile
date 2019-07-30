import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';

import MainNavigator from './src/navigations/MainNavigator';
import store from './src/store';

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="dark-content" />
    <MainNavigator />
  </Provider>
);


export default App;
