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
            To help you reset your password, enter the email you used in
            registering and we will send you reset instructions.
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
                    placeholder="Email address"
                    name="email"
                    formWidth={width * 0.9}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    keyboardType="email-address"
                  />
                </View>
                {errors.email && touched.email && (
                  <Text style={{ fontSize: 10, color: "#000000" }}>
                    {errors.email}
                  </Text>
                )}

                {data.isLoading ? (
                  <Loader />
                ) : (
                  <Text style={{ padding: 10, color: "#000" }}>
                    {data.errorMessage}
                  </Text>
                )}

                <CustomButton
                  onPress={() => navigation.navigate("OTP VERIFICATION")}
                  title="Send Link"
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
});

export default Login;
