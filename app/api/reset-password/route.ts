import User from "@/models/User";
import connect from "@/utils/db";
import getCurrentUser from "@/utils/utils";
import { NextRequest, NextResponse } from "next/server";
// import { ObjectId } from "mongoose";
import { ObjectId } from "mongodb";
import bcryptjs from "bcryptjs";

export async function PUT(request: NextRequest) {
  try {
    await connect();
    const { token, password, confirmPassword } = await request.json();
    const loggedUser = await getCurrentUser();

    if (password !== confirmPassword || !loggedUser)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const userId = new ObjectId(loggedUser!.id);
    const newPassword = bcryptjs.hash(password, 10);

    if (token) {
    }

    const user = await User.findOneAndUpdate(
      {
        _id: userId,
      },
      {
        password: newPassword,
      },
      {
        new: true,
      }
    );

    if (!user.password)
      return NextResponse.json(
        {
          error:
            "User doesn't has account with password! Try login by Google or Github",
        },
        { status: 403 }
      );
      
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
