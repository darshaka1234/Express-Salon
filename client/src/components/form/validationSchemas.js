import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const RegisterValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Must be 3 characters or more")
    .required("Frist name is required"),
  lastName: Yup.string()
    .min(3, "Must be 3 characters or more")
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email adress is required"),
  telephone: Yup.string()
    .required("Telephone number i required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(10, "too long"),
  password: Yup.string()
    .min(3, "Password is too short - should be 3 chars minimum.")
    .required("Password is required"),
  confPassword: Yup.string()
    .min(3, "Password is too short - should be 3 chars minimum.")
    .required("Comfirm password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email adress is required"),
  password: Yup.string()
    .min(3, "Password is too short - should be 3 chars minimum.")
    .required("Password is required"),
});
