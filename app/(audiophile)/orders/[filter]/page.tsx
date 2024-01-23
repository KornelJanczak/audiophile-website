import OrderItems from "@/components/OrdersPage/OrderItems/OrderItems";
import SkeletonCard from "@/components/UI/Skeleton/Skeleton";
import Order from "@/models/Order";
import connect from "@/utils/db";
import NoContent from "@/components/UI/NoContentCard/NoContent";
import getCurrentUser from "@/utils/utils";
import { Suspense } from "react";
import { redirect } from "next/navigation";

async function getOrders(params: string) {
  await connect();
  const user = await getCurrentUser();

  if (!user || !user.isVerfied) redirect("/sign-in");

  let orders;

  if (params !== "last") {
    const startOfYear = new Date(params + "-01-01T00:00:00.000Z");
    const endOfYear = new Date(params + "-12-31T23:59:59.999Z");

    orders = await Order.find({
      userId: user.id,
      createdAt: { $gte: startOfYear, $lte: endOfYear },
      updatedAt: { $gte: startOfYear, $lt: endOfYear },
    });
  } else {
    orders = await Order.find({ userId: user.id });
  }

  if (!orders || orders.length === 0) return [];

  return orders;
}

export default async function OrdersPage({
  params,
}: {
  params: { filter: string };
}) {
  const orders = await getOrders(params.filter);

  if (orders.length === 0)
    return (
      <div className="p-4">
        <NoContent
          content="At the moment, there are no orders placed!"
          btnContent="CONTINUE SHOPPING"
        />
      </div>
    );

  if (orders.length > 0)
    return (
      <Suspense fallback={<SkeletonCard length={orders.length} />}>
        <OrderItems orders={orders} />
      </Suspense>
    );
}
