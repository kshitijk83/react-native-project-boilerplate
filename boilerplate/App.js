/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {
  View,
  Text,
} from 'react-native';

import { Provider } from 'react-redux';
import Store from './src/store';
import Hehe from './src/containers/index';

const App = () => {
  return (
    <Provider store={Store}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Hehe />
      </View>
    </Provider>
  );
};



export default App;