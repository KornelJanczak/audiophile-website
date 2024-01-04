import { IOrder } from "@/models/@type-props";
import classes from "./OrdersSection.module.css";
import BackButton from "../UI/BackButton/BackButton";
import { Suspense } from "react";
import { ICartData } from "@/models/@type-props";

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

                return (
                  <li key={order._id!.toString()}>
                    <span>luty</span>
                    <div className={classes.order__container}>
                      <ul className={classes.ul__info}>
                        <li></li>
                        <li>{totalCost}</li>
                        <li>{order.isPaid ? "Paid" : "UnPaid"}</li>
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
