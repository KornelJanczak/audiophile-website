import { IOrder } from "@/models/@type-props";
import classes from "./OrdersSection.module.css";
import BackButton from "../UI/BackButton/BackButton";
import { Suspense } from "react";
import { ICartData } from "@/models/@type-props";
import ResponsiveImage from "../UI/ResponsiveImage";

const OrdersSection: React.FC<{ orders: IOrder[] | null }> = ({ orders }) => {
  if (!orders || orders.length === 0) {
    return <div>No orders available</div>;
  }
  console.log(orders);

  if (orders)
    return (
      <>
        <section className="section">
          <BackButton padding="4rem" />
          <div className={classes.container}>
            <div className={classes.filter__bar}>
              <label htmlFor="filter-bar">Orders</label>
              <select
                name="filter"
                id="filter-bar"
                className={classes.select__filter}
              >
                <option value="Last 6 months">Last 6 months</option>
                <option value="2024">2025</option>
              </select>
            </div>
            <ul className={classes.order__ul}>
              {orders!.map((order) => {
                const totalCost = order.orderItems.reduce(
                  (acc, order) => acc + order.totalPrice,
                  0
                );

                // console.log(order.updatedAt.toString().toLocaleDateString("en-US"));
                console.log(order.updatedAt?.toLocaleDateString());

                return (
                  <li key={order._id!.toString()}>
                    <span>luty</span>
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
                          <span className={classes.text}>{totalCost}</span>
                        </li>
                        <li>
                          <strong className={classes.strong}>
                            Payment status
                          </strong>
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
          </div>
        </section>
      </>
    );
};

export default OrdersSection;
