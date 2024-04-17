import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './CustomButton.styles';

export const CustomButton = ({text, handleSubmit}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleSubmit}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};
