/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Provider } from 'react-redux';
import store from './src/store';
import RoutesToScreens from './src/routes';

const App = () => {
  return (
    <Provider store={store}>
      <RoutesToScreens />
    </Provider>
  );
};

export default App;
