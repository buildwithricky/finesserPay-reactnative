import * as yup from "yup";

const signUpValidationSchema = yup.object().shape({
  firstname: yup.string().required("Email Address is Required"),
  lastname: yup.string().required("Email Address is Required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  phonenumber: yup
    .number()
    .min(10, ({ min }) => `input valid phone number`)
    .required("phone number is is required"),
});

export default signUpValidationSchema;
