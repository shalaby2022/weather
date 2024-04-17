import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from './ScreenNames';
import Auth from '../pages/auth/Auth';
import Home from '../pages/home/Home';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenNames.Auth} component={Auth} />
      <Stack.Screen name={screenNames.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default RootStack;
