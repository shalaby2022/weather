import {StyleSheet} from 'react-native';
import {ScreenHeight, ScreenWidth} from '../../../constants/ScreenDimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
});
