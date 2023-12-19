"use client";
import { useMutation } from "@tanstack/react-query";
import { useFormik, FormikValues, FormikErrors } from "formik";
import axios, { AxiosError } from "axios";
import FormContainer from "../UI/FormContainer/FormContainer";
import { SignupShema } from "@/models/SignUpSchema";
import classes from "./RegisterForm.module.css";
import Input from "../UI/Input/Input";
import { useState } from "react";
import EyeButton from "../UI/EyeButton";
import Button from "../UI/Button/Button";
import { IFormValuesSignUp } from "@/models/@type-props";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Triangle } from "react-loader-spinner";

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [viewConfirmPass, setViewConfirmPass] = useState<boolean>(false);

  const { mutate, isPending } = useMutation({
    mutationFn: async (userData: FormikValues) =>
      await axios.post("/api/register", {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
      }),
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status == 409) {
          return toast.error(`This email is already in use. Sign In instead?`);
        }
        if (err.response?.status == 500) {
          return toast.error("Error! Try again later.");
        }
        if (err.response?.status == 422) {
          return toast.error("Invalid data!");
        }
        return toast.error("Something went wrong. Please try again");
      }
    },
    onSuccess(data) {
      const email = data.data.savedUser.email;
      toast.success(`Verification email sent to ${email}`);
      router.push("/verify-email?to=" + email);
    },
  });

  // Init state
  const initialValues: IFormValuesSignUp = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // Input schema

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignupShema,
    onSubmit: (values: FormikValues) => mutate(values),
  });

  // Validate
  const firstNameValidate = formik.touched.firstName && formik.errors.firstName;
  const lastNameValidate = formik.touched.lastName && formik.errors.lastName;
  const emailValidate = formik.touched.email && formik.errors.email;
  const passwordValidate = formik.touched.password && formik.errors.password;
  const confirmPasswordValidate =
    formik.touched.confirmPassword && formik.errors.confirmPassword;

  // On/Off Register button
  const formEnable =
    formik.errors.firstName === undefined &&
    formik.values.firstName !== "" &&
    formik.errors.lastName === undefined &&
    formik.values.lastName !== "" &&
    formik.errors.email === undefined &&
    formik.values.email !== "" &&
    formik.errors.password === undefined &&
    formik.values.password !== "" &&
    formik.errors.confirmPassword === undefined &&
    formik.values.confrimPassword !== "";

  return (
    <FormContainer>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <Input
          inputValidate={firstNameValidate as FormikErrors<FormikValues>}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          errorMsg={formik.errors.firstName as FormikErrors<FormikValues>}
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First name"
          labelText="First name"
        />
        <Input
          inputValidate={lastNameValidate as FormikErrors<FormikValues>}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          errorMsg={formik.errors.lastName as FormikErrors<FormikValues>}
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last name"
          labelText="Last name"
        />
        <Input
          inputValidate={emailValidate as FormikErrors<FormikValues>}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          errorMsg={formik.errors.email as FormikErrors<FormikValues>}
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          labelText="Email address"
        />
        <Input
          inputValidate={passwordValidate as FormikErrors<FormikValues>}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          errorMsg={formik.errors.password as FormikErrors<FormikValues>}
          type={viewPassword ? "text" : "password"}
          name="password"
          id="password"
          placeholder="Password"
          labelText="Password"
          inputButton={
            <EyeButton
              onClick={() => setViewPassword((viewPassword) => !viewPassword)}
              viewText={viewPassword}
            />
          }
        />
        <Input
          inputValidate={confirmPasswordValidate as FormikErrors<FormikValues>}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          errorMsg={confirmPasswordValidate as FormikErrors<FormikValues>}
          type={viewConfirmPass ? "text" : "password"}
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm password"
          labelText="Confirm password"
          inputButton={
            <EyeButton
              onClick={() =>
                setViewConfirmPass((viewConfirmPass) => !viewConfirmPass)
              }
              viewText={viewConfirmPass}
            />
          }
        />
        <Button
          type="submit"
          style={classes.btn}
          disabled={!formEnable || isPending}
          isPending={isPending}
        >
          Register
        </Button>
      </form>
    </FormContainer>
  );
};

export default RegisterForm;
