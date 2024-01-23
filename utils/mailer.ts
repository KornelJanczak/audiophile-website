import User from "@/models/User";
import bcryptjs from "bcryptjs";
import { IsendEmail } from "@/models/@type-props";
import { Resend } from "resend";
import VerifyEmail from "@/emails/verify-email";
import { ReactElement } from "react";
import OrderEmail from "@/emails/order-email";
import ResetPassword from "@/emails/password-email";
import * as randomString from "uuid";

const TOKEN_EXPIRY_TIME = 3600000;
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({
  email,
  emailType,
  userId,
  firstName,
  lastName,
  order,
  address,
}: IsendEmail) => {
  try {
    const randomId = randomString.v4() + randomString.v4();
    const hashedToken = await bcryptjs.hash(randomId, 10);

    let emailTemplate: ReactElement | string = "";

    if (!email || !emailType) return;
    if (
      ![process.env.VERIFY, process.env.RESET, process.env.ORDER].includes(
        emailType
      )
    ) {
      throw new Error("Invalid emailType");
    }

    switch (emailType) {
      case process.env.VERIFY:
        await User.findByIdAndUpdate(userId, {
          verifyToken: hashedToken,
          verifyTokenExpiry: Date.now() + TOKEN_EXPIRY_TIME,
        });
        emailTemplate = VerifyEmail({ hashedToken, firstName, lastName });
        break;
      case process.env.RESET:
        await User.findOneAndUpdate(
          { email: email },
          {
            forgotPasswordToken: hashedToken,
            forgotPasswordTokenExpiry: Date.now() + TOKEN_EXPIRY_TIME,
          }
        );
        emailTemplate = ResetPassword({ hashedToken });
        break;
      case process.env.ORDER:
        console.log("ORDER");
        emailTemplate = OrderEmail({ order, firstName, lastName, address });
        break;
      default:
        break;
    }


    const data = await resend.emails.send({
      from: "audiophile <onboarding@resend.dev>",
      to: [email],
      subject: "Audiophile",
      react: emailTemplate,
    });

    return data;
  } catch (error) {
    throw new Error("Send email faield: " + error);
  }
};
