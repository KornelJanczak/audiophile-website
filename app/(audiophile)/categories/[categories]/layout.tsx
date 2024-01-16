import MainNavigation from "@/components/MainNavigation/MainNav/MainNavigation";
import Footer from "@/components/UI/Footer/Footer";
import InfoSection from "@/components/UI/InfoSection/InfoSection";
import PageWrapper from "@/animations/PageWrapper";

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageWrapper>
      <MainNavigation />
      <main>
        {children}
        <InfoSection />
      </main>
      <Footer />
    </PageWrapper>
  );
}
