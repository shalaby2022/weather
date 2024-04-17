import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {IMAGES} from '../../assets';
import {styles} from './BackButton.styles';

export const BackButton = ({color}) => {
  return (
    <TouchableOpacity style={styles.container(color)}>
      <Image
        source={IMAGES.back}
        resizeMode="contain"
        style={styles.imgStyle}
      />
    </TouchableOpacity>
  );
};
