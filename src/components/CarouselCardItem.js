import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import { colors } from '../utils/utils';

export const SLIDER_WIDTH =
  Dimensions.get('window').width;
export const ITEM_WIDTH =
  Math.round(SLIDER_WIDTH);

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
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
    color: colors.primaryColor,
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: colors.secondaryColor,
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default CarouselCardItem;
