import { sendEmail } from "@/utils/mailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email)
      return NextResponse.json(
        { message: "Missing required data" },
        { status: 500 }
      );
  
    await sendEmail({ email, emailType: process.env.RESET as string });

    return NextResponse.json({ message: "Success!" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: `${err}` }, { status: 500 });
  }
}
