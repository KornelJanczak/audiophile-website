import CheckoutItems from "@/components/CheckoutPage/CheckoutItems/CheckoutItems";
import getCurrentUser from "@/utils/utils";
import { redirect } from "next/navigation";

const CheckoutPage: React.FC = async () => {
  const user = await getCurrentUser();

  if (!user) redirect("sign-in");

  return <CheckoutItems />;
};

export default CheckoutPage;
