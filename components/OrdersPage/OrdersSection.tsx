import { IOrder } from "@/models/Order";
import classes from "./OrdersSection.module.css";
import BackButton from "../UI/BackButton/BackButton";

const OrdersSection: React.FC<{ orders: any }> = ({ orders }) => {
  if (!orders || orders.length === 0) {
    return <div>No orders available</div>;
  }

  if (orders)
    return (
      <>
        <BackButton />
        {/* <section className="section">
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
            {orders!.map((order) => (
              <li key={order.id}></li>
            ))}
          </ul>
        </div>
      </section> */}
      </>
    );
};

export default OrdersSection;
