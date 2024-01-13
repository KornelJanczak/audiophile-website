import User from "@/models/User";
import bcryptjs from "bcryptjs";
import { IsendEmail } from "@/models/@type-props";
import { Resend } from "resend";
import VerifyEmail from "@/emails/verify-email";
import { ReactElement } from "react";
import OrderEmail from "@/emails/order-email";
// domain.com/verifytoken/  - client
// domain.com/verifytoken?token=/ -server

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
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);
    let emailTemplate: ReactElement | string = "";

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
        await User.findByIdAndUpdate(userId, {
          forgotPasswordToken: hashedToken,
          forgotPasswordTokenExpiry: Date.now() + TOKEN_EXPIRY_TIME,
        });
        emailTemplate = "Reset password";
        break;
      case process.env.ORDER:
        emailTemplate = OrderEmail({ order, firstName, lastName, address });
        break;
      default:
        break;
    }

    console.log(emailTemplate);

    const data = await resend.emails.send({
      from: "Audiophile <onboarding@resend.dev>",
      to: [email],
      subject: "Audiophile",
      react: emailTemplate,
    });

    return data;
  } catch (error) {
    throw new Error("Send email faield: " + error);
  }
};

// const transport = nodemailer.createTransport({
//   host: "smtp.resend.com",
//   secure: true,
//   port: 465,
//   auth: {
//     user: "resend",
//     pass: process.env.RESEND_API_KEY,
//   },
// });

// const mailOptions = {
//   from: "korneljanczak11@gmail.com",
//   to: email,
//   subject: "Hello world",
//   html: `<a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">Click</a>`,
// };
