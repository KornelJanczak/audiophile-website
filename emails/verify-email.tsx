import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { IVerifyEmail } from "@/models/@type-props";

export default function VerifyEmail({
  hashedToken,
  firstName,
  lastName,
}: IVerifyEmail) {
  const username = firstName + " " + lastName;
  return (
    <Html>
      <Head />
      <Preview>
        A fine-grained personal access token has been added to your account
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${process.env.DOMAIN}/public/assets/shared/logo.png`}
            width={200}
          ></Img>
          <Text style={title}>
            <strong>@{username}</strong>, a personal access was created on your
            account.
          </Text>

          <Section style={section}>
            <Text style={text}>
              Hey <strong>{username}</strong>!
            </Text>
            <Text style={text}>
              A fine-grained personal access token was recently added to your
              account.
            </Text>

            <Button
              href={`${process.env.DOMAIN}/verify-email?token=${hashedToken}`}
              style={button}
            >
              View your token
            </Button>
          </Section>
          <Text style={links}></Text>

          <Text style={footer}>
            AudioPhile, Inc. ・10 Colin Kelly Jr Street ・San Francisco, CA
            16788
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  width: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center" as const,
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left" as const,
};

const button = {
  fontSize: "14px",
  backgroundColor: "#d87d4a",
  color: "#fff",
  lineHeight: 1.5,
  borderRadius: "0.5em",
  padding: "0.75em 1.5em",
};

const links = {
  textAlign: "center" as const,
};

const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "60px",
};
