import {StyleSheet} from 'react-native';
import {ScreenHeight} from '../../constants/ScreenDimensions';

export const styles = StyleSheet.create({
  container: {
    height: ScreenHeight * 0.25,
    marginTop: 15,
    marginBottom: 5,
  },
  ImageContainer: {
    height: ScreenHeight * 0.25 * 0.84,
    overflow: 'hidden',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  lowerPart: {
    height: ScreenHeight * 0.25 * 0.16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationAndDateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationLogo: color => ({
    width: 25,
    height: 25,
    marginEnd: 8,
    tintColor: color ? color : undefined,
  }),
  locationText: {
    fontSize: 16,
    color: '#444',
    fontWeight: '400',
    marginEnd: 5,
  },
  temperatureText: {
    fontWeight: 'bold',
    color: 'yellow',
    fontSize: 20,
    position: 'absolute',
    top: 14,
    left: 10,
    zIndex: 1000,
  },
});
