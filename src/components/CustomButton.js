import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { colors } from '../utils/utils';

// custom buttons

const CustomButton = ({
  title,
  onPress,
  background,
  color,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        styles({ background, color }).button
      }>
      <Text
        style={
          styles({ background, color }).text
        }>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = ({ background, color }) =>
  StyleSheet.create({
    button: {
      width: 343,
      height: 60,
      margin: 10,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:
        background || colors.secondaryColor,
      borderWidth: 1,

      borderColor: '#0B0B0B',
    },
    text: {
      alignItems: 'center',
      padding: 10,
      color: color || colors.secondaryColor,
    },
  });

export default CustomButton;
