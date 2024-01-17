"use client";
import FormContainer from "../UI/FormContainer/FormContainer";
import Input from "../UI/Input/Input";
import { useFormik, FormikValues, FormikErrors } from "formik";
import { ResetPasswordSchema } from "@/models/SignUpSchema";
import EyeButton from "../UI/EyeButton";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Button from "../UI/Button/Button";
import PageWrapper from "@/animations/PageWrapper";
import WhiteHeader from "../UI/WhiteHeader";

const PasswordReset: React.FC = () => {
  const [viewConfirmPass, setViewConfirmPass] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);

  const { mutate } = useMutation({
    mutationFn: async (userData: FormikValues) => {},
  });

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  // Input schema
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ResetPasswordSchema,
    onSubmit: (values: FormikValues) => mutate(values),
  });

  const passwordValidate = formik.touched.password && formik.errors.password;
  const confirmPasswordValidate =
    formik.touched.confirmPassword && formik.errors.confirmPassword;

  return (
    <PageWrapper>
      <WhiteHeader />
      <FormContainer
        route="/sign-in"
        routeTitle="Login"
        title="Reset Password"
        style={{ paddingTop: "6rem" }}
      >
        <form className=" w-100">
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
            inputValidate={
              confirmPasswordValidate as FormikErrors<FormikValues>
            }
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
          <Button style="mg-3 btn">CHANGE PASSWORD</Button>
        </form>
      </FormContainer>
    </PageWrapper>
  );
};

export default PasswordReset;
