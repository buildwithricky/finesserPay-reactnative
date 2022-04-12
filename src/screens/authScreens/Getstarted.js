import React from "react";
import LandingImage from "../../components/LandingImage";
import { Text, Image, View, StyleSheet, Dimensions } from "react-native";
import { useGlobalContext } from "../../context/Provider";
const logo = require("../../../assets/appflow/cipreview.png");
const { height } = Dimensions.get("screen");
import CustomButton from "../../components/CustomButton";

// get started screen
export const GetStarted = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={{
          position: "absolute",
          zIndex: 2,
          marginTop: 44,
          top: 0,
        }}
      />

      <LandingImage />
      <View>{}</View>
      <View style={styles.btnGroup}>
        <CustomButton
          onPress={() => navigation.navigate("SIGN UP")}
          title="GET STARTED"
          color="#FFFFFF"
        />

        <CustomButton
          onPress={() => navigation.navigate("LOGIN")}
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
    backgroundColor: "#fff",
    height: height,
  },
  btnGroup: {
    alignItems: "center",
    height: height * 0.2,
    justifyContent: "center",
    padding: 2,
  },
});
