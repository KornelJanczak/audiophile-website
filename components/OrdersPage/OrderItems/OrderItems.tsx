import { IOrder } from "@/models/@type-props";
import classes from "./OrderItems.module.css";
import ResponsiveImage from "../../UI/ResponsiveImage";
import { isObjectFirstOfMonth } from "@/helpers/algorithm";
import NoContent from "@/components/UI/NoContentCard/NoContent";
import PageWrapper from "@/components/UI/PageWrapper";

const OrderItems: React.FC<{ orders: IOrder[] | null }> = ({ orders }) => {
  // Sorted since oldest to lastest
  const sortedArr: IOrder[] | undefined = orders?.sort((a, b) => {
    const dateA: any = new Date(a.createdAt!);
    const dateB: any = new Date(b.createdAt!);
    return dateA - dateB;
  });

  if (sortedArr?.length === 0) {
    return (
      <div className={classes.no__content__container}>
        <NoContent
          content="At the moment, there are no orders placed!"
          btnContent="CONTINUE SHOPPING"
          key=""
        />
      </div>
    );
  }

  if (sortedArr?.length !== 0)
    return (
      <PageWrapper>
        <ul className={classes.order__ul}>
          {sortedArr!.map((order: IOrder) => {
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
                {firstOfMonthOrder && (
                  <span className={classes.month}>{date}</span>
                )}

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
                      <span className={classes.text}>
                        $ {totalCost.toLocaleString("en-US")}
                      </span>
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
                            width={200}
                            height={200}
                            altText={orderItem.name}
                            imgClassName={classes.img}
                          />
                          <p className={classes.product__name}>
                            {orderItem.name}
                          </p>
                          <span className={classes.quantity}>
                            x{orderItem.quantity}
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
      </PageWrapper>
    );
};

export default OrderItems;
