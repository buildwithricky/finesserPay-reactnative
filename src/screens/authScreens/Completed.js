import React from "react";

import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

import Logo from "../../../assets/Logob.png";
import completed from "../../../assets/completed.png";
import { fonts, fontSizes } from "../../utils/utils";
const { width, height } = Dimensions.get("screen");
const Completed = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View
          style={{
            alignItems: "center",
            marginVertical: height * 0.04,
          }}
        >
          <Image source={completed} />
        </View>
        <Text style={styles.text}> Welcome on Board !</Text>
        <Text style={styles.light}>You’re all Set</Text>
        <Text style={styles.light}>Enjoy</Text>
      </View>

      <View>
        <Image source={Logo} />
      </View>
    </SafeAreaView>
  );
};

export default Completed;

const styles = StyleSheet.create({
  container: {
    height: height,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  text: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.lg,
    textAlign: "center",
  },
  light: {
    fontFamily: fonts.light,
    fontSize: 18,
    textAlign: "center",
  },
});
