// import { connect } from "@/utils/mongodb";
import User from "@/models/User";
import connect from "@/utils/db";
import { sendEmail } from "@/utils/mailer";
// import bcrypt from "bcrypt";
import * as argon2 from "argon2";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, password } = await request.json();

    // Validate all data from inputs
    if (
      !firstName ||
      firstName.trim().length < 2 ||
      !lastName ||
      lastName.trim().length < 2 ||
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7
    ) {
      return NextResponse.json(
        {
          error:
            "Invalid input - password should also be at least 7 characters long.",
        },
        { status: 422 }
      );
    }
    await connect();

    // Check if user already exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User alredy exist" }, { status: 409 });
    }

    // Created new user with hashed password
    const hashedPassword = await argon2.hash(password);
    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    // Send verification email
    await sendEmail({
      firstName: firstName,
      lastName: lastName,
      email: email,
      emailType: process.env.VERIFY as string,
      userId: savedUser._id,
    });

    return NextResponse.json(
      { message: "User registered", succes: true, savedUser },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        error: "An error occurred while registering the user.",
      },
      { status: 500 }
    );
  }
}
