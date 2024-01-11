"use client";
import PageWrapper from "@/animations/PageWrapper";
import OrderItems from "./OrderItems";
import { IOrder } from "@/models/@type-props";

const OrderSection: React.FC<{ orders: IOrder[] | null }> = ({ orders }) => {
  if (window.window.innerWidth <= 720) {
    return (
      <PageWrapper>
        <OrderItems orders={orders} />
      </PageWrapper>
    );
  }

  if (window.window.innerWidth >= 720) {
    return <OrderItems orders={orders} />;
  }
};

export default OrderSection;
