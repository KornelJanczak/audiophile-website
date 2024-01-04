import mongoose, { Document, Schema as MongooseShema } from "mongoose";
import { ICartData } from "./@type-props";

interface Order {
  _id: string;
  items: ICartData[];
}

interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isVerfied: boolean;
  isAdmin: boolean;
  forgotPasswordToken: string;
  forgotPasswordTokenExpiry: DateConstructor;
  verifyToken: string;
  verifyTokenExpiry: DateConstructor;
  orders: Order[];
}

const { Schema } = mongoose;

const userSchema: MongooseShema<IUser> = new Schema(
  {
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: false,
    },
    isVerfied: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
