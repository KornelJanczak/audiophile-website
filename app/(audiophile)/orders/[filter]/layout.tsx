import MainNavigation from "@/components/MainNavigation/MainNav/MainNavigation";
import Footer from "@/components/UI/Footer/Footer";
import FilterBar from "@/components/OrdersPage/FilterBar/FilterBar";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNavigation />
      <main>
        <section className="section">
          <FilterBar />
          {children}
        </section>
      </main>
      <Footer />
    </>
  );
}
