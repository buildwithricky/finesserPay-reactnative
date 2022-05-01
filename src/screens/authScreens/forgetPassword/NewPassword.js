import React, { useState, useContext } from "react";
import loginValidationSchema from "../../../formValidations/loginValidation";
import * as SecureStore from "expo-secure-store";
import { useGlobalContext } from "../../../context/Provider";
import { Loader } from "../../../components/Loader";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { colors, fonts, fontSizes } from "../../../utils/utils";
import CustomButton from "../../../components/CustomButton";
import { TextInput } from "react-native-paper";
import FormInput from "../../../components/Forms/FormInput";
import { Formik } from "formik";
import { AxiosContext } from "../../../context/axiosContext";
import { GET_USER } from "../../../context/reducers/userReducer";
const { height, width } = Dimensions.get("screen");

const Login = ({ navigation }) => {
  const [show, setShow] = useState(true);
  const { login } = useGlobalContext();
  const [data, setData] = useState({
    isLoading: false,
    errorMessage: "",
  });
  const { dispatch, globalState } = useGlobalContext();
  const { authAxios } = useContext(AxiosContext);
  const getUserData = async () => {
    try {
      const user = await authAxios.get("/getUser");
      const userData = await user.data;
      await SecureStore.setItemAsync("userData", JSON.stringify(userData));
      dispatch({
        type: GET_USER,
        payload: {
          userData,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <KeyboardAvoidingView
      behaviour={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.textCon}>
          <Text style={styles.subText}>
            Kindly update your new password in the field below.
          </Text>
        </View>

        <View style={styles.formContainer}>
          {/* login form with validation */}
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values) => {
              setData({ ...data, isLoading: true });
              const status = await login(values);

              if (status === "success") {
                await getUserData();
                if (globalState.userData) {
                  setData({ ...data, isLoading: false });
                } else {
                  setData({
                    ...data,
                    isLoading: false,
                  });
                }
              } else if (
                status.status === "error" ||
                status.status === "fail"
              ) {
                setData({
                  ...data,
                  isLoading: false,
                  errorMessage: status.error || status.msg,
                });
              }
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
            }) => (
              <>
                <View style={styles.formRow}>
                  <FormInput
                    name="password"
                    type="password"
                    placeholder="Enter New Password"
                    isHidden={show}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
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
                <View style={styles.formRow}>
                  <FormInput
                    name="password"
                    type="password"
                    placeholder="Confirm New Password"
                    isHidden={show}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
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

                <CustomButton
                  onPress={() => handleSubmit()}
                  title="Reset Password"
                  color="#FFFFFF"
                />
              </>
            )}
          </Formik>
        </View>
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
    color: "#b2b2b2",
    fontFamily: fonts.regular,
    fontSize: 14,
  },
  forgotPassword: {
    color: "#1C1C1C",
    fontSize: 14,
    fontFamily: fonts.regular,
  },
  special: {
    color: "#1C1C1C",
    fontFamily: fonts.bold,
    fontSize: 14,
  },
});

export default Login;
