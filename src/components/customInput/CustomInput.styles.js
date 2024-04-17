import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  inputTitle: {
    backgroundColor: '#FFF',
    paddingHorizontal: 6,
    position: 'absolute',
    top: -9,
    left: 15,
    zIndex: 1000,
    color: '#222',
  },
  input: {
    borderWidth: 0.7,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 45,
    color: '#444',
  },
  iconWrapper: leftPosition => ({
    width: 26,
    height: 26,
    borderRadius: 13,
    position: 'absolute',
    top: 13.5,
    left: leftPosition,
  }),
});
