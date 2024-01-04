import OrdersSection from "@/components/OrdersPage/OrdersSection";
import Order from "@/models/Order";
import connect from "@/utils/db";
import getCurrentUser from "@/utils/utils";
import { Suspense } from "react";

async function getOrders() {
  const user = await getCurrentUser();

  if (!user || !user.isVerfied) return null;

  const orders = await Order.find({ userId: user.id });

  const ordersValid = orders.every((order) => order.userId == user.id);

  if (!ordersValid) return null;

  return orders;
}



export default async function OrdersPage() {
  const orders = await getOrders();

  return (
    <Suspense fallback={<p>Loading</p>}>
      <OrdersSection orders={orders} />
    </Suspense>
  );
}
