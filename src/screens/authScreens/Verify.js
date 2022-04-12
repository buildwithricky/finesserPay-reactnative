import React, { useState } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { fonts } from "../../utils/utils";
import CustomButton from "../../components/CustomButton";
import { styles } from "./Signup";
import { Loader } from "../../components/Loader";
import { verifyEmail } from "../../Api/signUp";
import { signUpUser } from "../../Api/signUp";
const Verify = ({ route, navigation }) => {
  const [data, setData] = useState({
    isLoading: false,
    errorMessage: "",
  });
  const [otpCode, setCode] = useState("");
  const passedData = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textCon}>
        <Text style={styles.text}>Verify your account</Text>
      </View>
      <View style={styles.textCon}>
        <Text style={styles.subText}>
          A Verification code has been sent to your mail
        </Text>
      </View>
      <View>
        <OTPInputView
          style={{ width: "80%", height: 200 }}
          pinCount={4}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={stylesOtp.underlineStyleBase}
          codeInputHighlightStyle={stylesOtp.underlineStyleHighLighted}
          onCodeFilled={(code) => {
            setCode(code);
          }}
        />
      </View>

      <View style={{ marginBottom: 50 }}>
        <Text style={styles.lowers}>
          Did’t receive the code?<Text style={styles.special}>Resend code</Text>
        </Text>
      </View>
      {data.isLoading ? <Loader /> : <Text></Text>}
      <CustomButton
        disabled={data.isLoading}
        onPress={async () => {
          setData({ ...data, isLoading: true });
          console.log(passedData.code, passedData.phonenumber);
          console.log(otpCode);
          const response = await verifyEmail(
            passedData.code,
            passedData.phonenumber,
            otpCode
          );
          console.log(response.data);
          if (response.data.status === "success") {
            navigation.navigate("Account Type", {
              ...passedData,
              isEmailVerified: response.data.status,
            });
          } else {
            setData({ ...data, errorMessage: response.data.msg });
          }
        }}
        title="Verfify your account"
        color="#FFFFFF"
      />
    </SafeAreaView>
  );
};

export default Verify;

const stylesOtp = StyleSheet.create({
  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 60,
    fontFamily: fonts.bold,
    fontSize: 32,
    height: 60,
    color: "#000000",
    backgroundColor: "#FFFFFF",
    borderWidth: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0.2 },
    shadowOpacity: 0.25,
    elevation: 5,
    borderRadius: 10,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});
