import * as Yup from "yup";

const password = Yup.string()
  .required("Password is required!")
  .min(7, "Password should be at least 7 characters long!")
  .matches(/[a-zA-Z]/, "Password must have a letter!")
  .matches(/\d/, "Password must have a figure!")
  .matches(
    /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/,
    "Password must have at least one special character"
  );

const confirmPassword = Yup.string()
  .oneOf([Yup.ref("password"), undefined], "Passwords are not the same!")
  .required("Repeat password!");

export const emailSchema = Yup.string()
  .email("Email must have  @!")
  .required("Email is required!");

export const SignupShema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name must include at least 2 letters!")
    .max(50, "First name must include max 50 letters!")
    .required("First name is required!"),
  lastName: Yup.string()
    .min(2, "Last name must include at least 2 letters!")
    .max(50, "Last name must include max 50 letters!")
    .required("Last name is required!"),
  email: emailSchema,
  password: password,
  confirmPassword: confirmPassword,
});

export const ResetPasswordSchema = Yup.object().shape({
  oldPassword: password,
  password: password,
  confirmPassword: confirmPassword,
});
