import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

export const SLIDER_WIDTH =
  Dimensions.get('window').width;
  export const SLIDER_HEIGHT =
  Dimensions.get('window').height * 0.5;
export const ITEM_WIDTH =
  Math.round(SLIDER_WIDTH);

const SelectImage = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={item}
        style={styles.image}
      />
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
    height: SLIDER_HEIGHT,
    resizeMode: 'cover',
  },
});

export default SelectImage;
