"use client";
import VerifyEmailComponent from "@/components/VerifyEmailPage/VerifyEmail";
import { VerifyEmailProps } from "@/models/@type-props";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const VerifyEmailPage: React.FC<VerifyEmailProps> = ({ searchParams }) => {
  console.log(searchParams);

  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const { mutate: verifiedMutate } = useMutation({
    mutationFn: () => axios.post("api/verify-email", { token }),
  });

  // const { mutate: verifiedMutate } = useMutation({
  //   mutationFn: () => axios.post("api/verify-email", { token }),
  // });

  // useEffect(() => {
  //   const urlToken = window.location.search.split("=")[1];
  //   setToken(urlToken);
  // }, []);

  // useEffect(() => {
  //   if (token.length > 0) {
  //     verifiedMutate();
  //   }
  // }, [token])

  // useEffect(() => {
  //   const urlToken = window.location.search.split("=")[1];
  //   setToken(urlToken);
  // }, []);

  // useEffect(() => {
  //   if (token.length > 0) {
  //     verifiedMutate();
  //   }
  // }, [token]);

  return <VerifyEmailComponent searchParams={searchParams} />;
};

export default VerifyEmailPage;
