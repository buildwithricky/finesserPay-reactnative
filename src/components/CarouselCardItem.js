import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {
  colors,
  fonts,
  fontSizes,
} from '../utils/utils';

export const SLIDER_WIDTH =
  Dimensions.get('window').width;
export const ITEM_WIDTH =
  Math.round(SLIDER_WIDTH);

const CarouselCardItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={item.path}
        style={styles.image}
      />

      <Text style={styles.header}>
        {item.title}
      </Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,

    paddingBottom: 40,
    shadowColor: '#000',
  },
  image: {
    width: ITEM_WIDTH,
    height: 447,
    resizeMode: 'cover',
  },
  header: {
    fontSize: 32,

    lineHeight: 40,
    letterSpacing: 0,

    color: colors.primaryColor,
    paddingLeft: 20,
    paddingTop: 20,
    fontFamily: fonts.bold,
  },
  body: {
    color: colors.secondaryColor,
    fontSize: fontSizes.sm,
    lineHeight: fontSizes.md,
    paddingLeft: 20,
    fontFamily: fonts.regular,
  },
});

export default CarouselCardItem;
