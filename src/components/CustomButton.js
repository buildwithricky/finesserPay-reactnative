import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {
  colors,
  fonts,
  fontSizes,
} from '../utils/utils';

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
        shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,  
    elevation: 5,
      width: 343,
      height: 49,
      marginBottom: 13,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:
        background || colors.secondaryColor,
     
    },
    text: {
      alignItems: 'center',
      padding: 10,
      color: color || colors.secondaryColor,
      fontFamily: fonts.bold,
      fontSize: fontSizes.sm,
      lineHeight: fontSizes.md,
    },
  });

export default CustomButton;
