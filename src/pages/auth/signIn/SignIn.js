/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {styles} from './SignIn.styles';
import {IMAGES} from '../../../assets';
import {ScreenWidth} from '../../../constants/ScreenDimensions';
import {
  BackButton,
  CustomButton,
  CustomInput,
  SocialMediaButton,
} from '../../../components';
import {Icons} from '../../../constants/Icons';
import {screenNames} from '../../../navigation/ScreenNames';

const SignIn = ({setAuthScreen, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.bannerWrapper}>
        <ImageBackground source={IMAGES.banner} style={styles.bannerStyle}>
          <BackButton color={'#E7CCFF'} />
          <Text style={styles.title}>{'Sign in to your account'}</Text>
        </ImageBackground>
      </View>

      <KeyboardAvoidingView
        style={styles.formWrapper}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <CustomInput
          title="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
          iconeName={Icons.emailIcon}
          direction={ScreenWidth * 0.04}
        />
        <CustomInput
          title="Password"
          placeholder="Enter your password"
          iconeName={Icons.lockIcon}
          direction={ScreenWidth * 0.05}
        />

        <Text style={styles.forgetPassword}>{'Forget Password?'}</Text>
        <CustomButton
          text={'Sign In'}
          handleSubmit={() => navigation.navigate(screenNames.Home)}
        />
        <Text style={{marginTop: 7}}>
          {"Dont't Have an account,"}
          <Text style={styles.signInText} onPress={() => setAuthScreen(0)}>
            {' sign up'}
          </Text>
        </Text>

        <View style={styles.horizontalRow}>
          <View style={styles.orWrapper}>
            <Text style={styles.orText}>{'Or'}</Text>
          </View>
        </View>

        <View style={styles.socialBtnWrapper}>
          <SocialMediaButton imgSrc={IMAGES.google} />
          <SocialMediaButton imgSrc={IMAGES.facebook} />
          <SocialMediaButton imgSrc={IMAGES.twiiter} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignIn;
