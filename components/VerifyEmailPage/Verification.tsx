"use client";
import classes from "./Verification.module.css";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import Button from "../UI/Button/Button";
import { useEffect } from "react";
import XMark from "@/public/Icons/X-Icon";
import { Triangle } from "react-loader-spinner";

const Verification: React.FC<{ token: string }> = ({ token }) => {
  const { mutate, isError, isPending, isSuccess } = useMutation({
    mutationFn: () => axios.post("api/verify-email", { token }),
  });

  useEffect(() => {
    mutate();
  }, [mutate, token]);

  if (isError) {
    return (
      <div className={classes.container__success}>
        <div className={classes.container}>
          <div className={classes.error}>
            <XMark />
          </div>
          <h3>There was a problem</h3>
          <p>This token is not valid or might be expired. Please try again.</p>
        </div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className={classes.container__success}>
        <div className={classes.container}>
          <h3>You&apos;re all set!</h3>
          <p>Thank you for verifying your email.</p>
          <Link href={"/sign-in"} className={classes.link}>
            <Button style={classes.btn}>Sign in</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (isPending) {
    return (
      <div className={classes.container__success}>
        <Triangle color="#101010" width={35} height={35} />
        <h3>Verifying...</h3>
        <p>This won&apos;t take long.</p>
      </div>
    );
  }
};

export default Verification;
