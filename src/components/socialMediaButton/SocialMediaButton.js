import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {styles} from './SocialMediaButton.styles';

export const SocialMediaButton = ({imgSrc}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={imgSrc} style={styles.imgStyle} />
    </TouchableOpacity>
  );
};
