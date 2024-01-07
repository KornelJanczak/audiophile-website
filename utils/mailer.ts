import User from "@/models/User";
import bcrypt from "bcrypt";
import { IsendEmail } from "@/models/@type-props";
import { Resend } from "resend";
import VerifyEmail from "@/emails/verify-email";
import { ReactElement } from "react";
import OrderEmail from "@/emails/order-email";
// domain.com/verifytoken/  - client
// domain.com/verifytoken?token=/ -server

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmial = async ({
  email,
  emailType,
  userId,
  firstName,
  lastName,
  order,
}: IsendEmail) => {
  try {
    const hashedToken = await bcrypt.hash(userId.toString(), 10);
    let emailTemplate: ReactElement | string = "";

    if (emailType === process.env.VERIFY) {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
      emailTemplate = VerifyEmail({ hashedToken, firstName, lastName });
    }

    if (emailType === process.env.RESET) {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
      emailTemplate = "Reset password";
    }

    if (emailType === process.env.ORDER)
      emailTemplate = OrderEmail({ order, firstName, lastName });

    const data = await resend.emails.send({
      from: "Verify your mail! <onboarding@resend.dev>",
      to: [email],
      subject: "Audiophile",
      react: emailTemplate,
    });

    return data;
  } catch (error) {
    throw new Error("Send email faield");
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

// const mailResponse = await transport.sendMail(mailOptions);
