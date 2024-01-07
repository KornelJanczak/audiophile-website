import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/utils/stripe";
import Order from "@/models/Order";
import { sendEmail } from "@/utils/mailer";
import getCurrentUser from "@/utils/utils";

export async function POST(req: Request) {
  const body = await req.text();
  // const user = await getCurrentUser();

  // console.log(user);

  // if ( !body) return new NextResponse(null, { status: 401 });

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

  if (event.type === "checkout.session.completed") {
    const order = await Order.findByIdAndUpdate(session?.metadata?.orderId, {
      isPaid: true,
      address: addressString,
    });

    await sendEmail({
      email: session.metadata!.email,
      emailType: process.env.ORDER as string,
      userId: session.metadata!.userId,
      firstName: session.metadata!.firstName,
      lastName: session.metadata!.lastName,
      order: order,
    });
  }

  return new NextResponse(null, { status: 200 });
}

// whsec_1d5bebdbe174424fe98e1afe407d276ac790c6bd0b659ed08a6e93b689cdd080
