import mongoose, {
  Date,
  Document,
  Schema as MongooseShema,
  ObjectId,
} from "mongoose";
import { ICartData } from "./@type-props";

export interface IOrderMongoose extends Document {
  userId: string;
  isPaid: boolean;
  address: string;
  orderNumber: number;
  orderItems: ICartData[];
}

const { Schema } = mongoose;

const orderSchema: MongooseShema<IOrderMongoose> = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    isPaid: {
      type: Boolean,
      required: true,
    },
    orderNumber: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
    },
    orderItems: [
      {
        id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        totalPrice: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        image: {
          desktop: {
            type: String,
            required: true,
          },
          tablet: {
            type: String,
            required: true,
          },
          mobile: {
            type: String,
            required: true,
          },
        },
      },
    ],
  },
  { timestamps: true }
);

const Order =
  mongoose.models.Order || mongoose.model<IOrderMongoose>("Order", orderSchema);

export default Order;
