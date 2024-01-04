import mongoose, {
  Document,
  Schema as MongooseShema,
  ObjectId,
} from "mongoose";
import { ICartData } from "./@type-props";

export interface IOrder extends Document {
  _id?: ObjectId;
  userId: string;
  isPaid: boolean;
  address: string;
  orderItems: ICartData[];
  __v?: number;
  // phone: string;
  // stripeCustomerId: string;
  // stripePriceId: string;
  // stripeCurrentPeriodEnd: string;
  // stripeOrderId: string;
}

const { Schema } = mongoose;

const orderSchema: MongooseShema<IOrder> = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    // stripeCustomerId: {
    //   type: String,
    //   required: true,
    // },
    // stripeOrderId: {
    //   type: String,
    //   required: true,
    // },
    // stripePriceId: {
    //   type: String,
    //   required: true,
    // },
    // stripeCurrentPeriodEnd: {
    //   type: String,
    //   requierd: true,
    // },
    isPaid: {
      type: Boolean,
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
  mongoose.models.Order || mongoose.model<IOrder>("Order", orderSchema);

export default Order;
