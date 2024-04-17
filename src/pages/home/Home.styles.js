import {StyleSheet} from 'react-native';
import {ScreenHeight, ScreenWidth} from '../../constants/ScreenDimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#BB5347',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 42,
    paddingHorizontal: 15,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginStart: ScreenWidth * 0.2,
  },
  listWrapper: {
    paddingHorizontal: 20,
  },
  errorText: {
    color: '#AA0000',
    fontWeight: '500',
    fontSize: 18,
    textAlign: 'center',
    marginTop: ScreenHeight / 3,
  },
  ListFooterComponent: {
    width: ScreenWidth,
    marginBottom: ScreenHeight * 0.16,
  },
});
