"use client";
import FormContainer from "../UI/FormContainer/FormContainer";
import Input from "../UI/Input/Input";
import { useFormik, FormikValues, FormikErrors } from "formik";
import { ResetPasswordSchema } from "@/models/SignUpSchema";
import EyeButton from "../UI/EyeButton";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Button from "../UI/Button/Button";
import PageWrapper from "@/animations/PageWrapper";
import WhiteHeader from "../UI/WhiteHeader";
import axios from "axios";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { signOut } from "next-auth/react";

const PasswordReset: React.FC = () => {
  const [viewConfirmPass, setViewConfirmPass] = useState(false);
  const [viewOldPass, setViewOldPass] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  const route = useRouter();
  const searchParam = useSearchParams();
  const token = searchParam.get("token");

  // useEffect(() => {
  //   console.log(searchParam.get("token"));
  // }, []);

  const { mutate, isPending } = useMutation({
    mutationFn: async (userData: FormikValues) =>
      await axios.put("api/reset-password", {
        oldPassword: userData.oldPassword,
        password: userData.password,
        confirmPassword: userData.confirmPassword,
      }),
    onSuccess: () => {
      toast.success("Your password has been reset!");
      signOut();
      route.push("/sign-in");
    },
  });

  const initialValues = {
    password: "",
    oldPassword: "",
    confirmPassword: "",
  };

  // Input schema
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ResetPasswordSchema,
    onSubmit: (values: FormikValues) => mutate(values),
  });

  const passwordValidate = formik.touched.password && formik.errors.password;
  const oldPasswordValidate =
    formik.touched.oldPassword && formik.errors.oldPassword;
  const confirmPasswordValidate =
    formik.touched.confirmPassword && formik.errors.confirmPassword;

  return (
    <PageWrapper>
      <WhiteHeader />
      <FormContainer
        route="/sign-in"
        routeTitle="Login"
        title="Reset Password"
        style={{ paddingTop: "2rem" }}
      >
        <form className="w-100">
          {!token && (
            <Input
              inputValidate={oldPasswordValidate as FormikErrors<FormikValues>}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.oldPassword}
              errorMsg={formik.errors.oldPassword as FormikErrors<FormikValues>}
              type={viewPassword ? "text" : "password"}
              name="oldPassword"
              id="oldPassword"
              placeholder="Old Password"
              labelText="Old password"
              inputButton={
                <EyeButton
                  onClick={() =>
                    setViewOldPass((viewPassword) => !viewPassword)
                  }
                  viewText={viewOldPass}
                />
              }
            />
          )}
          <Input
            inputValidate={passwordValidate as FormikErrors<FormikValues>}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            errorMsg={formik.errors.password as FormikErrors<FormikValues>}
            type={viewPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="New password"
            labelText="New password"
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
          <Button style="mg-3 btn" isPending={isPending} disabled={isPending}>
            CHANGE PASSWORD
          </Button>
        </form>
      </FormContainer>
    </PageWrapper>
  );
};

export default PasswordReset;
