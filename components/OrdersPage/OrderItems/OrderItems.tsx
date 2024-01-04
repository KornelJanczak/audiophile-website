// "use client"
import { IOrder } from "@/models/@type-props";
import classes from "./OrderItems.module.css";
import ResponsiveImage from "../../UI/ResponsiveImage";
import { isObjectFirstOfMonth } from "@/helpers/algorithm";

const OrderItems: React.FC<{ orders: IOrder[] | null }> = ({ orders }) => {
  return (
    <ul className={classes.order__ul}>
      {orders!.map((order, i) => {
        const totalCost = order.orderItems.reduce(
          (acc, order) => acc + order.totalPrice,
          0
        );

        const date = order.updatedAt?.toLocaleDateString("en-US", {
          month: "long",
        });

        const firstOfMonthOrder = isObjectFirstOfMonth(orders, order);

        return (
          <li key={order._id!.toString()} className={classes.container}>
            {firstOfMonthOrder && <span className={classes.month}>{date}</span>}

            <div className={classes.order__container}>
              <ul className={classes.ul__info}>
                <li>
                  <strong className={classes.strong}>Order date</strong>
                  <span className={classes.text}>
                    {order.updatedAt?.toLocaleDateString()}
                  </span>
                </li>
                <li>
                  <strong className={classes.strong}>Total cost</strong>
                  <span className={classes.text}>{totalCost.toLocaleString("en")}</span>
                </li>
                <li>
                  <strong className={classes.strong}>Payment status</strong>
                  <span className={classes.text}>
                    {order.isPaid ? "Paid" : "Not paid"}
                  </span>
                </li>
              </ul>
              <ul className={classes.order__item__ul}>
                {order.orderItems.map((orderItem) => {
                  return (
                    <li key={orderItem.id}>
                      <ResponsiveImage
                        images={{
                          desktop: orderItem.image.desktop.slice(1),
                        }}
                        width={240}
                        height={240}
                        altText={orderItem.name}
                      />
                      <p className={classes.text}>{orderItem.name}</p>
                      <span className={classes.quantity}>
                        {orderItem.quantity}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default OrderItems;
