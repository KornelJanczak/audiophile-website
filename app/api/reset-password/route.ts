import User from "@/models/User";
import connect from "@/utils/db";
import getCurrentUser from "@/utils/utils";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import bcryptjs from "bcryptjs";

export async function PUT(request: NextRequest) {
  try {
    const { token, oldPassword, password, confirmPassword } =
      await request.json();

    if (password !== confirmPassword)
      return NextResponse.json(
        { error: "Missing required data" },
        { status: 400 }
      );

    //  Connecto to DB
    await connect();

    const hashPass = await bcryptjs.hash(password, 10);
    // If token no exist
    if (!token) {
      const loggedUser = await getCurrentUser();
      // Check if usser is loggef if token not exist
      if (!loggedUser || !oldPassword)
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

      const userId = new ObjectId(loggedUser!.id);
      const user = await User.findById(userId);

      const checkPass = await bcryptjs.compare(oldPassword, user.password);
      console.log(checkPass);

      if (!checkPass)
        return NextResponse.json(
          { error: "Incorrect password! Please provide correct password." },
          { status: 401 }
        );

      user.password = hashPass;
      await user.save();
      return NextResponse.json(
        { message: "Password has been changed", succes: true },
        { status: 201 }
      );
    }

    // If token exist
    const userWithToken = await User.findOne({
      forgotPasswordToken: token,
      forgotPasswordTokenExpiry: { $gt: Date.now() },
    });

    if (!userWithToken)
      return NextResponse.json(
        { error: "Wrong reset token. Try again!" },
        { status: 400 }
      );

    userWithToken.password = hashPass;
    userWithToken.forgotPasswordToken = undefined;
    userWithToken.forgotPasswordTokenExpiry = undefined;
    await userWithToken.save();

    return NextResponse.json(
      { message: "Password has been changed", succes: true },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
