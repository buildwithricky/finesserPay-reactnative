import React from 'react';
import CarouselCards, {
  PaginationHandler,
} from '../components/CarouselCards';
const logo = require('../../assets/appflow/cipreview.png');
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import CustomButton from '../components/CustomButton';

export const GetStarted = () => {
  return (
    <View style={styles.container}>
      <CarouselCards />

      <View style={styles.btnGroup}>
        <CustomButton
          onPress={() => null}
          title="GET STARTED"
          color="#FFFFFF"
        />

        <CustomButton
          onPress={() => null}
          title="LOGIN"
          color="#000000"
          background="#FFFFFF"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  btnGroup: {
    margin: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: { flex: 1 },
});
