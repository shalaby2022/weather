import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  imgStyle: {
    transform: [{rotate: '180deg'}],
    width: 22,
    height: 22,
  },
});
