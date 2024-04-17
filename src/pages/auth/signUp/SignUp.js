/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {styles} from './SignUp.styles';
import {IMAGES} from '../../../assets';
import {ScreenWidth} from '../../../constants/ScreenDimensions';
import {BackButton, CustomButton, CustomInput} from '../../../components';
import {Icons} from '../../../constants/Icons';

const SignUp = ({setAuthScreen}) => {
  const [checked, setchecked] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureConfirmTextEntry, setSecureConfirmTextEntry] = useState(true);

  const toggleCheck = () => {
    setchecked(!checked);
  };

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const toggleConfirmSecureEntry = () => {
    setSecureConfirmTextEntry(!secureConfirmTextEntry);
  };

  const handleSubmit = () => {
    if (true) {
      setTimeout(() => {
        setAuthScreen?.(1);
      }, 2000);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.bannerWrapper}>
        <ImageBackground source={IMAGES.banner} style={styles.bannerStyle}>
          <BackButton color={'#E7CCFF'} />
          <Text style={styles.title}>{'Sign UP to your account'}</Text>
        </ImageBackground>
      </View>
      <View style={styles.formWrapper}>
        <CustomInput title="User name" placeholder="Enter your name" />
        <CustomInput
          title="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
        />
        <CustomInput
          title="Password"
          placeholder="Enter your password"
          secureTextEntry={secureTextEntry}
          toggleSecureEntry={toggleSecureEntry}
          iconeName={Icons.eyeIcon}
          direction={ScreenWidth * 0.78}
        />
        <CustomInput
          title="Confirm Password"
          placeholder="Enter your password"
          secureTextEntry={secureConfirmTextEntry}
          toggleConfirmSecureEntry={toggleConfirmSecureEntry}
          iconeName={Icons.eyeIcon}
          direction={ScreenWidth * 0.78}
        />

        <View style={styles.policyWrapper}>
          <TouchableOpacity onPress={toggleCheck}>
            {checked ? Icons.checkedSquare : Icons.unCheckedSquare}
          </TouchableOpacity>
          <Text>{'  I accept & agree terms conditions& privacy policy'}</Text>
        </View>

        <CustomButton text={'Sign Up'} handleSubmit={handleSubmit} />

        <Text style={{marginTop: 7}}>
          {'Already Have an account,'}
          <Text style={styles.signInText} onPress={() => setAuthScreen(1)}>
            {' sign In'}
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
