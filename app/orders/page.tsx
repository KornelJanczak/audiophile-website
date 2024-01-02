import Order from "@/models/Order";
import getCurrentUser from "@/utils/utils";

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

  console.log(orders);
  

  return <div></div>;
}
