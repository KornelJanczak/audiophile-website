import { IOrderEmail } from "@/models/@type-props";
import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = "https://audiophile-website-azure.vercel.app";

export default function OrderEmail({
  firstName,
  lastName,
  order,
  address,
}: IOrderEmail) {
  const orderDate = order?.createdAt?.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const totalCost = order?.orderItems.reduce(
    (acc, order) => acc + order.totalPrice,
    0
  );

  return (
    <Html>
      <Head />
      <Preview>
        Get your order summary, estimated delivery date and more
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Hr style={global.hr} />
          <Section style={message}>
            <Img
              src={`${baseUrl}/assets/shared/logo.png`}
              width="143"
              height="25"
              alt="Nike"
              style={{
                margin: "auto",
                filter: "invert(100%)",
              }}
            />
            <Text style={{ ...global.text, marginTop: 24 }}>
              We hope that shopping at Audiophile has been satisfying for you!
              Once your order is confirmed, we will inform you in another email
              message.
            </Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Text style={adressTitle}>
              Shipping to: {firstName !== undefined ? firstName : ""}
              {lastName !== undefined ? lastName : ""}
            </Text>
            <Text style={{ ...global.text, fontSize: 14 }}>
              {address?.map((addressLine) => addressLine)}
            </Text>
          </Section>
          <Hr style={global.hr} />
          <Section
            style={{ ...paddingX, paddingTop: "40px", paddingBottom: "40px" }}
          >
            {order?.orderItems.map((item) => (
              <Row style={{ paddingTop: "24px" }} key={item.id}>
                <Column>
                  <Img
                    src={`${baseUrl}${item.image.desktop.slice(1)}`}
                    alt={item.name}
                    style={{ float: "left" }}
                    width="260px"
                  />
                </Column>
                <Column
                  style={{
                    verticalAlign: "top",
                    paddingLeft: "12px",
                  }}
                >
                  <Text style={{ ...paragraph, fontWeight: "500" }}>
                    {item.name}
                  </Text>
                  <Text style={global.text}>Quantity: x{item.quantity}</Text>
                </Column>
              </Row>
            ))}
          </Section>
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Row style={{ display: "infiline-flex", marginBottom: 40 }}>
              <Column style={{ width: "170px" }}>
                <Text style={global.paragraphWithBold}>Order Number</Text>
                <Text style={track.number}>{order?.orderNumber}</Text>
              </Column>
              <Column>
                <Text style={global.paragraphWithBold}>Order Date</Text>
                <Text style={track.number}>{orderDate}</Text>
              </Column>
              <Column>
                <Text style={global.paragraphWithBold}>Total price</Text>
                <Text style={track.number}>{totalCost}</Text>
              </Column>
            </Row>
            <Row>
              <Column align="center">
                <Link
                  style={global.button}
                  href={`${process.env.DOMAIN}/orders/last`}
                >
                  Show your orders
                </Link>
              </Column>
            </Row>
          </Section>
          <Hr style={global.hr} />
          <Section style={paddingY}>
            <Row>
              <Text style={global.heading}>Top Picks For You</Text>
            </Row>
            <Row style={recomendations.container}>
              <Column
                style={{ ...recomendations.product, paddingLeft: "4px" }}
                align="center"
              >
                <Link href={`${baseUrl}/categories/product/xx59-headphones`}>
                  <Img
                    src={`${baseUrl}/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg`}
                    alt="XX59 HEADPHONES"
                    width="100%"
                  />
                </Link>
                <Text style={recomendations.title}>XX59 HEADPHONES</Text>
              </Column>
              <Column style={recomendations.product} align="center">
                <Link
                  href={`${baseUrl}/categories/product/xx99-mark-two-headphones`}
                >
                  <Img
                    src={`${baseUrl}/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg`}
                    alt="XX99 MARK II HEADPHONES"
                    width="100%"
                  />
                </Link>
                <Text style={recomendations.title}>XX99 MK II HEADPHONES</Text>
              </Column>
            </Row>
          </Section>
          <Hr style={global.hr} />
          <Section style={paddingY}>
            <Row>
              <Text style={global.heading}>audiophile</Text>
            </Row>
            <Row style={categories.container}>
              <Column align="center">
                <Link href={baseUrl} style={categories.text}>
                  Home
                </Link>
              </Column>
              <Column align="center">
                <Link
                  href={`${baseUrl}/categories/headphones`}
                  style={categories.text}
                >
                  Headphones
                </Link>
              </Column>
              <Column align="center">
                <Link
                  href={`${baseUrl}/categories/speakers`}
                  style={categories.text}
                >
                  Speakers
                </Link>
              </Column>
              <Column align="center">
                <Link
                  href={`${baseUrl}/categories/earphones`}
                  style={categories.text}
                >
                  Earphones
                </Link>
              </Column>
            </Row>
          </Section>
          <Hr style={{ ...global.hr, marginTop: "12px" }} />
          <Section style={paddingY}>
            <Row style={footer.policy}>
              <Column>
                <Text style={footer.text}>Web Version</Text>
              </Column>
              <Column>
                <Text style={footer.text}>Privacy Policy</Text>
              </Column>
            </Row>
            <Row>
              <Text
                style={{ ...footer.text, paddingTop: 30, paddingBottom: 30 }}
              >
                Please contact us if you have any questions. (If you reply to
                this email, we won&apos;t be able to see it.)
              </Text>
            </Row>
            <Row>
              <Text style={footer.text}>
                © 2024 audiophile, Inc. All Rights Reserved.
              </Text>
            </Row>
            <Row>
              <Text style={footer.text}>
                AUDIOPHILE, INC. One Bowerman Drive, Beaverton, Oregon 97005,
                USA.
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const paddingX = {
  paddingLeft: "40px",
  paddingRight: "40px",
};

const paddingY = {
  paddingTop: "22px",
  paddingBottom: "22px",
};

const paragraph = {
  margin: "0",
  lineHeight: "2",
};

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  paragraphWithBold: { ...paragraph, fontWeight: "bold" },
  heading: {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: "-1px",
  } as React.CSSProperties,
  text: {
    ...paragraph,
    color: "#747474",
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#d87d4a",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    padding: "10px 0px",
    width: "220px",
    display: "block",
    textAlign: "center",
    fontWeight: 500,
  } as React.CSSProperties,
  hr: {
    borderColor: "#E5E5E5",
    margin: "0",
  },
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "10px auto",
  width: "600px",
  maxWidth: "100%",
  border: "1px solid #E5E5E5",
};

const track = {
  container: {
    padding: "22px 40px",
    backgroundColor: "#F7F7F7",
  },
  number: {
    margin: "12px 0 0 0",
    fontWeight: 500,
    lineHeight: "1.4",
    color: "#6F6F6F",
  },
};

const message = {
  padding: "40px 74px",
  textAlign: "center",
} as React.CSSProperties;

const adressTitle = {
  ...paragraph,
  fontSize: "15px",
  fontWeight: "bold",
};

const recomendationsText = {
  margin: "0",
  fontSize: "15px",
  lineHeight: "1",
  paddingLeft: "10px",
  paddingRight: "10px",
  textAlign: "center" as const,
};

const recomendations = {
  container: {
    padding: "20px 0",
  },
  product: {
    verticalAlign: "top",
    textAlign: "left" as const,
    paddingLeft: "2px",
    paddingRight: "2px",
  },
  title: { ...recomendationsText, paddingTop: "12px", fontWeight: "500" },
  text: {
    ...recomendationsText,
    paddingTop: "4px",
    color: "#747474",
  },
};

const categories = {
  container: {
    width: "370px",
    margin: "auto",
    paddingTop: "12px",
  },
  text: {
    fontWeight: "500",
    color: "#000",
  },
};

const footer = {
  policy: {
    width: "166px",
    margin: "auto",
  },
  text: {
    margin: "0",
    color: "#AFAFAF",
    fontSize: "13px",
    textAlign: "center",
  } as React.CSSProperties,
};
