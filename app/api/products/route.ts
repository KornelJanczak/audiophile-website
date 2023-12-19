import ProductModel from "@/models/Product";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const products = await ProductModel.find();
    console.log(products);
    if (!products)
      return NextResponse.json(
        { error: "Product does not exist!" },
        { status: 401 }
      );
    return NextResponse.json({ products }, { status: 200 });
  } catch (err) {
    console.log(err, "[WEBSITE CONTENT ERROR]");
    return NextResponse.json(
      { error: "Data fetchind failed" },
      { status: 500 }
    );
  }
}
