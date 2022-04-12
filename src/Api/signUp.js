import { baseUrl } from "./url";
import axios from "axios";

export const signUpUser = async (user, code = "+234") => {
  try {
    const userData = {
      firstName: user.firstname,
      lastName: user.lastname,
      password: user.password,
      phone: `${code}${user.phonenumber}`,
      email: user.email,
      accountType: user.accountType,
      interest: user.interest,
    };

    const config = {
      method: "post",
      url: `${baseUrl}/account/signup`,
      headers: {
        "content-type": "application/json",

        //add api access-token
      },
      data: userData,
    };

    const response = await axios(config);
    return response;

    // return response;
  } catch (err) {
    console.log(err.message);
  }
};

export const sendVerificationEmail = async (code = "+234", phonenumber) => {
  try {
    const data = {
      phone: `${code}${phonenumber}`,
    };
    const config = {
      method: "post",
      url: `${baseUrl}/account/sendotp`,
      headers: {
        "content-type": "application/json",

        //add api access-token
      },
      data: data,
    };
    const response = axios(config);

    return response;
  } catch (err) {
    console.log(err);
  }
};
export const verifyEmail = async (code = "+234", phonenumber, otpCode) => {
  try {
    const data = {
      phone: `${code}${phonenumber}`,
      otp: otpCode,
    };
    const config = {
      method: "post",
      url: `${baseUrl}/account/verifyotp`,
      headers: {
        "content-type": "application/json",

        //add api access-token
      },
      data: data,
    };
    const response = axios(config);

    return response;
  } catch (err) {
    console.log(err);
  }
};
