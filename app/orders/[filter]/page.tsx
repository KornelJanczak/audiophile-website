import FilterBar from "@/components/OrdersPage/FilterBar/FilterBar";
import OrderItems from "@/components/OrdersPage/OrderItems/OrderItems";
import Order from "@/models/Order";
import connect from "@/utils/db";
import getCurrentUser from "@/utils/utils";

async function getOrders(params: string) {
  await connect();
  const user = await getCurrentUser();

  if (!user || !user.isVerfied) return null;

  let orders;

  if (params !== "last") {
    const startOfYear = new Date(params + "-01-01T00:00:00.000Z");
    const endOfYear = new Date(params + "-12-31T23:59:59.999Z");

    orders = await Order.find({
      userId: user.id,
      createdAt: { $gte: startOfYear, $lte: endOfYear },
      updatedAt: { $gte: startOfYear, $lt: endOfYear },
    });
    console.log(orders);
  } else {
    orders = await Order.find({ userId: user.id });
  }

  if (!orders) return null;

  return orders;
}

export default async function OrdersPage({
  params,
}: {
  params: { filter: string };
}) {
  const orders = await getOrders(params.filter);
  return (
    <section className="section">
      <FilterBar />
        <OrderItems orders={orders} />

    </section>
  );
}
