import React from 'react';
import {View, Text, Image} from 'react-native';
import {IMAGES} from '../../assets';
import {styles} from './CityCard.styles';

const CityCard = ({item, location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <Text style={styles.temperatureText}>
          {item?.temperature ?? '32 °C'}
        </Text>
        <Image source={IMAGES.nature} resizeMode="contain" />
      </View>

      <View style={styles.lowerPart}>
        <View style={styles.locationAndDateWrapper}>
          <Image source={IMAGES.location} style={styles.locationLogo()} />
          <Text style={styles.locationText}>{location?.name}</Text>
        </View>

        <View style={styles.locationAndDateWrapper}>
          <Image source={IMAGES.calender} style={styles.locationLogo('red')} />
          <Text style={styles.locationText}>
            {location?.localtime?.substring(0, 10)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CityCard;
