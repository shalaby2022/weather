/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {useState} from 'react';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';

const Auth = ({navigation}) => {
  const [authScreen, setAuthScreen] = useState(1);

  return (
    <View style={{flex: 1}}>
      {authScreen === 0 ? (
        <SignUp setAuthScreen={setAuthScreen} />
      ) : (
        <SignIn setAuthScreen={setAuthScreen} navigation={navigation} />
      )}
    </View>
  );
};

export default Auth;
