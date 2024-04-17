/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';

function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <RootStack />
    </SafeAreaView>
  );
}

export default () => (
  <NavigationContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </NavigationContainer>
);
