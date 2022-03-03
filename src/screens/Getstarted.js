import React from 'react';
import LandingImage from '../components/LandingImage';
import {
  Text,
  Image,
  View,
  StyleSheet,
} from 'react-native';

const logo = require('../../assets/appflow/cipreview.png');

import CustomButton from '../components/CustomButton';

// get started screen
export const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={{
          position: 'absolute',
          zIndex: 2,
          marginTop: 44,
          top: 0,
        }}
      />

    <LandingImage/>
<View>
{}
</View>
      <View style={styles.btnGroup}>
        <CustomButton
          onPress={() => navigation.navigate('SIGN UP')}
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
    flex:1
  },
  btnGroup: {
    margin: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: { flex: 1 },
});
