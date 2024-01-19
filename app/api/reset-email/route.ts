import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/mailer";

export async function POST(res: NextResponse) {
  const { email } = await res.json();
  if (!email)
    return NextResponse.json(
      { message: "Missed required data!" },
      { status: 400 }
    );
  await sendEmail({
    email: email as string,
    emailType: process.env.RESET as string,
  });
  return NextResponse.json(
    { message: "Missed required data!" },
    { status: 201 }
  );
}
