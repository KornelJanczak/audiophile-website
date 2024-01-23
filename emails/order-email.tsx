import { IOrderEmail } from "@/models/@type-props";
import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Section,
  Text,
  Row,
  Column,
} from "@react-email/components";

export default function OrderEmail({
  firstName,
  lastName,
  order,
  address,
}: IOrderEmail) {
  const username = firstName + " " + lastName;
  console.log(order?.address);
  return (
    <Html>
      <Head></Head>
      <Body style={main}>
        <Container style={container}>
          <Section style={section}>
            <Text style={text}>
              Hey
              <strong>
                {firstName && lastName !== undefined ? username : ""}
              </strong>
              !
            </Text>
            <Text style={text}>
              We hope that shopping at Audiophile has been satisfying for you!
              Once your order is confirmed, we will inform you in another email
              message.
            </Text>
            <Section style={row}>
              <Text style={{ ...text, fontSize: "16px" }}>
                <strong>Order date: </strong>
                <span>
                  {order?.createdAt?.toLocaleDateString("en-US", {
                    weekday: "short",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </Text>
              <Text style={text}>
                <strong>Order address: </strong>
                <span>{address?.map((addressLine) => addressLine)}</span>
              </Text>
              <Text style={text}>
                <strong>Order number: </strong>
                <span>{order?.orderNumber}</span>
              </Text>
            </Section>
            <Section>
              <h3 style={{ textAlign: "left" }}>Oder Items</h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {order?.orderItems.map((order, i) => (
                  <Row key={i}>
                    <Text style={text}>{order.name}</Text>
                    <Text style={text}>Quantity: {order.quantity}</Text>
                  </Row>
                ))}
              </div>
            </Section>
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

const columnDiv = {
  display: "flex",
  alignItems: "flex-start",
};

const dataDiv = {
  display: "flex",
  justifyContent: "space-between",
};

const row = {
  width: "100%",
  paddingBottom: "30px",
  paddingTop: "20px",
  borderBottom: "solid 1px #dedede",
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

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center" as const,
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left" as const,
  fontSize: "16px",
};

const button = {
  fontSize: "14px",
  backgroundColor: "#d87d4a",
  color: "#fff",
  lineHeight: 1.5,
  borderRadius: "0.5em",
  padding: "0.75em 1.5em",
  marginTop: "30px",
  width: "90%",
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
