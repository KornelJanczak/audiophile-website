import MainNavigation from "@/components/MainNavigation/MainNav/MainNavigation";
import Footer from "@/components/UI/Footer/Footer";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
