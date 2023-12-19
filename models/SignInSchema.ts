import * as Yup from "yup";

export const SigninShema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required!")
    .email(
      "Please enter a valid email address (for example: your.name@domain.com)"
    ),
  password: Yup.string().required("Password is required!"),
});
