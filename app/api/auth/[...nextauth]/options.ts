import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GooglePovider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";
import { ObjectId } from "mongodb";
import connect from "@/utils/db";
import User from "@/models/User";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GooglePovider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
          _id?: ObjectId;
        };
        await connect();
        try {
          const user = await User.findOne({ email });

          if (!user || !user.isVerfied) return null;

          const passwordMatch = await bcryptjs.compare(password, user.password);

          if (!passwordMatch) return null;

          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "credentials") {
        console.log(user);
        return user;
      }

      if (account?.provider === "github" || account?.provider === "google") {
        await connect();
        try {
          const existingUser = await User.findOne({ email: user.email });
          if (existingUser) return true;

          const newUser = new User({
            email: user.email,
          });

          newUser.isVerfied = true;

          await newUser.save();
          return newUser;
        } catch (err) {
          console.log("Error saving user: ", err);
          return false;
        }
      }
    },

    async jwt({ token, user }) {
      await connect();
      if (!token) return {};
      const dbUser = await User.findOne({ email: token.email });
      if (!dbUser) {
        token.id = user!.id;
        token.name = user.name;
        return token;
      }

      return {
        id: dbUser._id,
        firstName: dbUser.firstName,
        lastName: dbUser.lastName,
        email: dbUser.email,
      };
    },
    async session({ session, token }) {
      if (token) {
        return {
          ...session,
          user: {
            ...session.user,
            id: token.id,
            firstName: token.firstName,
            lastName: token.lastName,
            name: token.name,
            email: token.email,
          },
        };
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return baseUrl;
      return baseUrl;
    },
  },
};
