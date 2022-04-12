import React, { useState, useEffect } from "react";
import signUpValidationSchema from "../../formValidations/signupValidation";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { colors, fonts, fontSizes } from "../../utils/utils";
import { Loader } from "../../components/Loader";
import CustomButton from "../../components/CustomButton";
import { TextInput } from "react-native-paper";
import FormInput from "../../components/Forms/FormInput";
import usa from "../../../assets/flags/usaFlag.png";
import nigeria from "../../../assets/flags/nigeria.png";
import { useGlobalContext } from "../../context/Provider";
import { sendVerificationEmail } from "../../Api/signUp";

import { Formik } from "formik";

import { Checkbox } from "react-native-paper";
import { CodesModal } from "../../components/CodesModal";
const { height, width } = Dimensions.get("screen");

const SignUp = ({ navigation }) => {
  const { globalState } = useGlobalContext();
  const [data, setData] = useState({
    isLoading: false,
    errorMessage: "",
  });
  // country codes mock d
  const countryCodesList = [
    {
      code: "+234",
      name: "nigeria",
      flag: nigeria,
      id: 1,
    },
    {
      code: "+1",
      name: "Usa",
      flag: usa,
      id: 2,
    },
  ];
  const [checked, setChecked] = React.useState(false);
  const [show, setShow] = useState(true);
  const [areas, setAreas] = useState(countryCodesList);
  const [selectedArea, setSelectedArea] = useState({
    code: "+234",
    name: "nigeria",
    flag: nigeria,
    id: 1,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <KeyboardAvoidingView
      behaviour={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
      <ScrollView 
      showsVerticalScrollIndicator={false}
     
      
    >
        <View style={styles.textCon}>
          <Text style={styles.text}>Lets get you started</Text>
        </View>
        <View style={styles.textCon}>
          <Text style={styles.subText}>
            Enter your basic details and let’s dive in
          </Text>
        </View>

        <View style={styles.formContainer}>
          {/* //Sign up form */}
          <Formik
            validationSchema={signUpValidationSchema}
            initialValues={{
              email: "",
              password: "",
              firstname: "",
              lastname: "",
              phonenumber: "",
            }}
            onSubmit={async (values) => {
              setData({ ...data, isLoading: true });
              // const responseData = await signUpUser(values, selectedArea.code);
              const responseData = await sendVerificationEmail(
                selectedArea.code,
                values.phonenumber
              );
              console.log(responseData.data);
              if (responseData) {
                setData({ ...data, isLoading: false });
                // dispatchEvent(signupuser)
                navigation.navigate("Verify", {
                  ...values,
                  code: selectedArea.code,
                });
                console.log(responseData);
              }
              // else if(responseData.status == "fa"){
              //   // update error states
              //   setData({ ...data, isLoading: false ,errorMessage:responseData.msg});
              // }
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              touched,
              dirty,
            }) => (
              <>
                <View style={styles.formRow}>
                  <FormInput
                    placeholder="First name"
                    onChangeText={handleChange("firstname")}
                    onBlur={handleBlur("firstname")}
                    value={values.firstname}
                    formWidth={width * 0.43}
                  />

                  <FormInput
                    placeholder="Last name"
                    onChangeText={handleChange("lastname")}
                    onBlur={handleBlur("lastname")}
                    value={values.lastname}
                    formWidth={width * 0.43}
                  />
                </View>
                <View style={styles.formRow}>
                  <View>
                    <TouchableOpacity
                      style={{
                        width: width * 0.3,
                        backgroundColor: "#F2F2F2",
                        height: 60,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 15,
                      }}
                      onPress={() => {
                        setIsModalOpen(true);
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          style={{ width: 30, height: 30, marginRight: 10 }}
                          source={selectedArea.flag}
                        />
                        <View
                          style={{
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text>{selectedArea.code}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <FormInput
                    placeholder="phone number"
                    keyboardType="numeric"
                    onChangeText={handleChange("phonenumber")}
                    onBlur={handleBlur("phonenumber")}
                    value={values.phonenumber}
                    formWidth={width * 0.58}
                  />
                </View>
                {errors.phonenumber && touched.phonenumber && (
                  <Text style={{ fontSize: 10, color: "#000" }}>
                    {errors.phonenumber}
                  </Text>
                )}
                <View style={styles.formRow}>
                  <FormInput
                    placeholder="Email address"
                    onBlur={handleBlur("email")}
                    onChangeText={handleChange("email")}
                    keyboardType="email-address"
                    value={values.email}
                    formWidth={width * 0.9}
                  />
                </View>
                {errors.email && touched.email && (
                  <Text style={{ fontSize: 10, color: "#000" }}>
                    {errors.email}
                  </Text>
                )}
                <View style={styles.formRow}>
                  <FormInput
                    placeholder="Password"
                    type="password"
                    isHidden={show}
                    onBlur={handleBlur("password")}
                    onChangeText={handleChange("password")}
                    value={values.password}
                    right={
                      <TextInput.Icon
                        name="eye-off"
                        onPress={() => {
                          setShow(!show);
                        }}
                      />
                    }
                    formWidth={width * 0.9}
                  />
                </View>
                {errors.password && touched.password && (
                  <Text style={{ fontSize: 10, color: "#000" }}>
                    {errors.password}
                  </Text>
                )}

                {/* sign up button */}
                <CustomButton
                  onPress={() => {
                    // send user data  to verify page

                    handleSubmit();
                    // navigation.navigate("Verify");
                  }}
                  disabled={!(isValid && dirty && checked)}
                  title="Sign up"
                  color="#FFFFFF"
                />
              </>
            )}
          </Formik>
        </View>
        {data.isLoading ? <Loader /> : <Text></Text>}

        <View style={styles.terms}>
          <View
            style={{
              alignItems: "center",
              marginBottom: 30,
              justifyContent: "center",
            }}
          >
            <Text style={styles.lowers}>
              Already have an Account{" "}
              <Text style={styles.special}>SIGN IN</Text>
            </Text>
          </View>
          <View style={styles.finalRow}>
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              color="#0F0F0F80"
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <View>
              <View>
                <Text style={styles.lower}>
                  {" "}
                  By tapping “Sign Up”, you Agree to our
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text>
                  <Text style={styles.special}>Terms</Text>
                  <Text style={styles.lowers}> and </Text>
                  <Text style={styles.special}>Privacy policy</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <CodesModal
            setSelectedArea={setSelectedArea}
            data={areas}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            setAreas={setAreas}
          />
        </View>
      </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: height,
    flex: 1,
    alignItems: "center",
  },
  textCon: { alignItems: "flex-start", width: width * 0.9 },
  formContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  text: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.sm,
    textAlign: "left",
    lineHeight: 20,
    marginBottom: 14,
  },
  subText: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.sm,
    lineHeight: 20,
    marginBottom: 14,
  },
  formRow: {
    flexDirection: "row",
    marginBottom: 15,
    width: width * 0.9,
    justifyContent: "space-between",
  },
  finalRow: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  lower: {
    color: "#b2b2b2",
    fontFamily: fonts.regular,
    fontSize: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  terms: {
    justifyContent: "center",
  },
  lowers: {
    color: "#1C1C1C",
    fontFamily: fonts.regular,
    fontSize: 14,
  },
  special: {
    color: "#1C1C1C",
    fontFamily: fonts.bold,
    fontSize: 14,
  },
});

export default SignUp;
