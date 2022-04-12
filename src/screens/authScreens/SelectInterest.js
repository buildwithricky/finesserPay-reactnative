import React, { useState } from "react";

import { Text, Image, View, StyleSheet, Dimensions } from "react-native";

import { RadioButton } from "react-native-paper";
import { fonts, fontSizes, colors } from "../../utils/utils";
import { RadioSet } from "../../components/Forms/Radioset";
import CustomButton from "../../components/CustomButton";
import SelectImage from "../../components/Forms/SelectImage";
import { signUpUser } from "../../Api/signUp";
import { Loader } from "../../components/Loader";

const progress = require("../../../assets/progress2.png");
const select = require("../../../assets/appflow/welcomeCarousel.png");

const { height } = Dimensions.get("screen");

// get started screen
export const SelectInterest = ({ navigation, route }) => {
  const [data, setData] = useState({
    isLoading: false,
    errorMessage: "",
  });
  const [userInterest, setUserInterest] = useState("");
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
        <Text style={styles.text}>Pick your Interest </Text>
      </View>
      <View>
        <RadioButton.Group
          onValueChange={(newValue) => setUserInterest(newValue)}
          value={userInterest}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <RadioSet categoryA="Music" />
              <RadioSet categoryA="Fashion" />
              <RadioSet categoryA="Influencing" />
            </View>
            <View>
              <RadioSet categoryA="Design" />
              <RadioSet categoryA="Photography" />
              <RadioSet categoryA="others" />
            </View>
          </View>
        </RadioButton.Group>
      </View>

      {data.isLoading ? <Loader /> : <Text>{data.errorMessage}</Text>}
      <View style={styles.btnGroup}>
        {!userInterest ? (
          <Text>''</Text>
        ) : (
          <CustomButton
            onPress={async () => {
              console.log(route.params);
              setData({ ...data, isLoading: true });
              const response = await signUpUser(
                { ...route.params, interest: userInterest },
                route.params.code
              );
              console.log(response.data);

              if (response.data.status === "success") {
                setData({ ...data, isLoading: false });
                navigation.navigate("Completed");
              } else {
                setData({
                  ...data,
                  errorMessage: response.data.msg,
                  isLoading: false,
                });
              }
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
