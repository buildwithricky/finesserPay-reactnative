import React, { useState } from "react";

import { Text, Image, View, StyleSheet, Dimensions } from "react-native";
import { RadioButton } from "react-native-paper";
import { RadioSet } from "../../components/Forms/Radioset";
import { fonts, fontSizes, colors } from "../../utils/utils";

import CustomButton from "../../components/CustomButton";
import SelectImage from "../../components/Forms/SelectImage";

const progress = require("../../../assets/progress.png");
const select = require("../../../assets/appflow/paymentsCarousel.png");

const { height } = Dimensions.get("screen");

// get started screen
export const SelectAccountType = ({ navigation, route }) => {
  const [userAccountType, setUserAccountType] = useState("");
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={progress}
          style={{
            position: "absolute",
            zIndex: 2,
            marginTop: 44,
            top: 0,
          }}
        />
      </View>

      <View>
        <SelectImage item={select} />
      </View>

      <View>
        <Text style={styles.text}>Select account Type </Text>
      </View>
      <RadioButton.Group
        onValueChange={(newValue) => setUserAccountType(newValue)}
        value={userAccountType}
      >
        <RadioSet categoryA="Individual" categoryB="Enterprise" />
      </RadioButton.Group>
      <View style={styles.btnGroup}>
        {!userAccountType ? (
          <Text>''</Text>
        ) : (
          <CustomButton
            onPress={() => {
              navigation.navigate("Select Interest", {
                ...route.params,
                accountType: userAccountType,
              });
            }}
            title="Continue"
            color="#FFFFFF"
          />
        )}
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
  text: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.ssm,
    textAlign: "center",
    marginBottom: 34,
  },
});
