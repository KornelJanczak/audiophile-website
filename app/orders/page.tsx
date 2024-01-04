import OrdersSection from "@/components/OrdersPage/OrdersSection";
import Order from "@/models/Order";
import connect from "@/utils/db";
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

  if (!orders) {
    // Obsługa przypadku, gdy nie udało się pobrać zamówień
    return <div>Error loading orders</div>;
  }

  if (orders) return <OrdersSection orders={orders} />;
}
