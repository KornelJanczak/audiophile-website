import { IOrderEmail } from "@/models/@type-props";
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
  Row,
  Column,
} from "@react-email/components";

export default function OrderEmail({
  firstName,
  lastName,
  order,
}: IOrderEmail) {
  const username = firstName + " " + lastName;
  return (
    <Html>
      <Head></Head>
      <Body style={main}>
        <Container style={container}>
          {/* <Text style={title}>
            <strong>@{username}</strong>, a personal access was created on your
            account.
          </Text> */}

          <Section style={section}>
            <Text style={text}>
              Hey <strong>{username !== undefined ? username : ""}</strong>!
            </Text>
            <Text style={text}>
              We hope that shopping at Audiophile has been satisfying for you!
              Once your order is confirmed, we will inform you in another email
              message.
            </Text>
            <Row style={row}>
              <Column style={{ textAlign: "left" }}>
                <strong>Address</strong>
                <ul>
                  <li>chuj</li>
                  <li>chuj</li>
                  <li>chuj</li>
                </ul>
              </Column>
              <Column>
                <strong>Order data</strong>
                <p>chuj</p>
              </Column>
              <Column style={{ textAlign: "right" }}>
                <strong>Number of order</strong>
                <p>chuj</p>
              </Column>
            </Row>
            <Button href={`${process.env.DOMAIN}/orders/last`} style={button}>
              Show your orders
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

const row = {
  width: "100%",
  paddingBottom: "40px",
  paddingTop: "20px",
  height: "auto",
};

//
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
