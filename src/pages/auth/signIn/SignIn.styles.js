import {StyleSheet} from 'react-native';
import {ScreenHeight, ScreenWidth} from '../../../constants/ScreenDimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  bannerWrapper: {
    height: ScreenHeight / 4,
    marginBottom: 40,
  },
  bannerStyle: {
    flex: 1,
    overflow: 'hidden',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 24,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 26,
    width: ScreenWidth * 0.5,
    marginTop: 10,
  },
  formWrapper: {
    flex: 1,
    paddingHorizontal: 18,
  },
  policyWrapper: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  signInText: {
    color: '#6247AA',
    fontWeight: '700',
  },
  forgetPassword: {
    textAlign: 'right',
    marginBottom: 30,
  },
  horizontalRow: {
    width: '100%',
    height: 1,
    marginTop: 30,
    marginBottom: 45,
    backgroundColor: '#CCC',
  },
  orWrapper: {
    position: 'absolute',
    top: -13,
    left: '45%',
    backgroundColor: '#FFF',
    zIndex: 1000,
    paddingHorizontal: 10,
  },
  orText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
  },
  socialBtnWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
