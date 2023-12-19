import User from "@/models/User";
import bcrypt from "bcrypt";
import { IsendEmail } from "@/models/@type-props";
import { Resend } from "resend";
import VerifyEmail from "@/emails/verify-email";
// domain.com/verifytoken/  - client
// domain.com/verifytoken?token=/ -server

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmial = async ({
  email,
  emailType,
  userId,
  firstName,
  lastName,
}: IsendEmail) => {
  try {
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    if (emailType === process.env.VERIFY) {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    }

    if (emailType === process.env.RESET) {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    const emailTemplate = process.env.VERIFY
      ? VerifyEmail({ hashedToken, firstName , lastName })
      : "Reset your password";

console.log(email);

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
