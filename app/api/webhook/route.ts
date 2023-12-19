import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/utils/stripe";
import Order from "@/models/Order";
import { ICartData } from "@/models/@type-props";

export async function POST(req: Request) {
  const body = await req.text();

  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const address = session?.customer_details?.address;

  const addresComponents = [
    address?.line1,
    address?.line2,
    address?.city,
    address?.postal_code,
    address?.country,
  ];

  const addressString = addresComponents
    .filter((address) => address !== null)
    .join(", ");

    console.log(session);

  console.log(session?.metadata?.orderId);

  if (event.type === "checkout.session.completed") {
    const order = await Order.findByIdAndUpdate(session?.metadata?.orderId, {
      isPaid: true,
      address: addressString,
    });

    console.log(order);
    // const productsIds = order.orderItems.map(
    //   (orderItem: ICartData) => orderItem.id
    // );
  }

  return new NextResponse(null, { status: 200 });
}

// whsec_1d5bebdbe174424fe98e1afe407d276ac790c6bd0b659ed08a6e93b689cdd080
