"use client";
import { useMutation } from "@tanstack/react-query";
import { useFormik, FormikValues, FormikErrors } from "formik";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import classes from "./LoginForm.module.css";
import Button from "../UI/Button/Button";
import { SigninShema } from "@/models/SignInSchema";
import EmailIcon from "@/public/Icons/EmailIcon";
import LockIcon from "@/public/Icons/LockIcon";
import { useState } from "react";
import googleLogo from "@/public/buttonsImg/google.png";
import githubLogo from "@/public/buttonsImg/github.png";
import Image from "next/image";
import Input from "../UI/Input/Input";
import { toast } from "sonner";
import FormContainer from "../UI/FormContainer/FormContainer";
import { IFormValuesSignIn } from "@/models/@type-props";
import EyeButton from "../UI/EyeButton";
import { Triangle } from "react-loader-spinner";
import { useAnimate } from "framer-motion";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(false);

  const [scope, animate] = useAnimate();

  //Google login
  const { mutate: googleMutate, isPending: googlePending } = useMutation({
    mutationFn: async (signInType: string) => await signIn(signInType),
    onError: () => toast.error(`Google authorization went wrong!`),
    onSuccess: () => toast.success("You are logged!"),
  });

  // Github login
  const { mutate: githubMutate, isPending: githubPending } = useMutation({
    mutationFn: async (signInType: string) => await signIn(signInType),
    onError: () => {
      toast.error("Github authorization went wrong! ");
    },
    onSuccess: () => toast.success("You are logged!"),
  });

  const initialValues: IFormValuesSignIn = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: SigninShema,
    onSubmit: (values: FormikValues) => {
      setIsPending(true);
      signIn("credentials", { ...values, redirect: false }).then((callback) => {
        setIsPending(false);

        if (callback?.ok) {
          toast.success("You are logged!");
          router.push("/");
        }

        if (callback?.error) {
          toast.error(`Something went wrong! Check your email and password`);
        }
      });
    },
  });

  const emailValidate = formik.touched.email && formik.errors.email;
  const passwordValidate = formik.touched.password && formik.errors.password;

  return (
    <FormContainer>
      <div className={classes.container__login__providers}>
        <Button
          style={classes.github__btn}
          onClick={() => githubMutate("github")}
        >
          {githubPending ? (
            <Triangle color="#101010" width={35} height={35} />
          ) : (
            <>
              <Image
                src={githubLogo}
                width={20}
                height={20}
                alt="Github Logo"
                className={classes.btn__img}
              />
              Continue with Github
            </>
          )}
        </Button>
        <Button
          style={classes.google__btn}
          onClick={() => googleMutate("google")}
        >
          {googlePending ? (
            <Triangle color="#101010" width={35} height={35} />
          ) : (
            <>
              <Image
                src={googleLogo}
                width={20}
                height={20}
                alt="Google Logo"
                className={classes.btn__img}
              />
              Continue with Google
            </>
          )}
        </Button>
      </div>
      <label className={classes.line}>OR</label>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <Input
          inputValidate={emailValidate as FormikErrors<FormikValues>}
          inputIcon={<EmailIcon />}
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
          inputIcon={<LockIcon />}
          inputButton={
            <EyeButton
              onClick={() => setViewPassword((viewPassword) => !viewPassword)}
              viewText={viewPassword}
            />
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          errorMsg={formik.errors.password as FormikErrors<FormikValues>}
          type={viewPassword ? "text" : "password"}
          name="password"
          id="password"
          placeholder="Password"
          labelText="Password"
        />
        <Button
          style={classes.btn}
          type="submit"
          disabled={isPending}
          isPending={isPending}
        >
          Login
        </Button>
      </form>
    </FormContainer>
  );
};

export default LoginForm;
