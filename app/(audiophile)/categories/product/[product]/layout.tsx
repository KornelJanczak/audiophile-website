import MainNavigation from "@/components/MainNavigation/MainNav/MainNavigation";
import Footer from "@/components/UI/Footer/Footer";
import InfoSection from "@/components/UI/InfoSection/InfoSection";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNavigation />
      <main>
        {children}
        <InfoSection />
      </main>
      <Footer />
    </>
  );
}
