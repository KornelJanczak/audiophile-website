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
} from "@react-email/components";

export default function OrderEmail({
  firstName,
  lastName,
  order,
}: IOrderEmail) {
  return (
    <Html>
      <Head></Head>
      <Body>
        {order?.orderItems.map((order, i) => (
          <Text key={i}>{order.name}</Text>
        ))}
      </Body>
    </Html>
  );
}
