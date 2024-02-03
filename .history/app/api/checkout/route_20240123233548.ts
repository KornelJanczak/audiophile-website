import { stripe } from "@/utils/stripe";
import { NextResponse } from "next/server";
import Order from "@/models/Order";
import getCurrentUser from "@/utils/utils";
import connect from "@/utils/db";
import { ICartData } from "@/models/@type-props";
import Stripe from "stripe";
import { fetchData } from "@/utils/mongodb";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function POST(req: Request) {
  try {
    await connect();
    const cartData: ICartData[] = await req.json();

    const productIds = cartData.map((product) => product.id);

    const products = await fetchData("Audiophile", "website-content");

    const productExist = products.some((product) =>
      productIds.includes(product._id)
    );

    const user = await getCurrentUser();

    if (!user || productIds.length === 0 || !productExist)
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    cartData.forEach((product) => {
      line_items.push({
        quantity: 1,
        price_data: {
          currency: "USD",
          product_data: {
            name: product.name,
          },
          unit_amount: (product.price + 50) * 100,
        },
      });
    });

    const orderNumber: any = Array.from({ length: 11 }, () =>
      Math.floor(Math.random() * 100)
    ).join("");

    console.log(orderNumber);

    const order = new Order({
      userId: user.id,
      isPaid: false,
      orderItems: cartData,
      orderNumber: orderNumber,
    });

    try {
      await order.save();
    } catch (err) {
      return NextResponse.json({ message: err }, { status: 404 });
    }

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      billing_address_collection: "required",
      phone_number_collection: {
        enabled: true,
      },
      success_url: `${process.env.FRONTEND_STORE_URL}/checkout?success=true`,
      cancel_url: `${process.env.FRONTEND_STORE_URL}/checkout?canceled=true`,
      metadata: {
        orderId: order._id.toString(),
        orderNumber: order.orderNumber,
        email: user.email,
        firstname: user.firstName,
        lastName: user.lastName,
        userId: user.id,
      },
    });

    if (!session)
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 401 }
      );

    return NextResponse.json({ url: session.url }, { headers: corsHeaders });
  } catch (err) {
    console.log("[STRIPE_ERROR]", err);
    return new NextResponse("Internal error", { status: 500 });
  }
}
