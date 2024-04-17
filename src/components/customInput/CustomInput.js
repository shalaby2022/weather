import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './CustomInput.styles';

export const CustomInput = ({
  title,
  placeholder,
  keyboardType,
  iconeName,
  secureTextEntry,
  toggleSecureEntry,
  toggleConfirmSecureEntry,
  direction,
}) => {
  const [value, setValue] = useState('');
  const onChangeText = val => {
    setValue(val);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={'#aaa'}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onChangeText={() => onChangeText()}
      />
      {iconeName && (
        <TouchableOpacity
          style={styles.iconWrapper(direction)}
          onPress={toggleSecureEntry || toggleConfirmSecureEntry}>
          {iconeName}
        </TouchableOpacity>
      )}
      <Text style={styles.inputTitle}>{title}</Text>
    </View>
  );
};
