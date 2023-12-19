import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import User from "@/models/User";

export function absoluteUrl(path: string) {
  return `${process.env.DOMAIN}${path}`;
}

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) return null;

    const currentUser = await User.findOne({ email: session?.user?.email });


    if (!currentUser) return null;

    return {
      id: currentUser._id.toString(),
      email: currentUser.email,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      isVerfied: currentUser.isVerfied || null,
    };
  } catch (error) {
    return null;
  }
}
