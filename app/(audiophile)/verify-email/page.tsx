"use client";
import VerifyEmailComponent from "@/components/VerifyEmailPage/VerifyEmail";
import { VerifyEmailProps } from "@/models/@type-props";
import React from "react";

const VerifyEmailPage: React.FC<VerifyEmailProps> = ({ searchParams }) => {
  return <VerifyEmailComponent searchParams={searchParams} />;
};

export default VerifyEmailPage;
