import HeroSection from "@/components/Home/HeroSection/HeroSection";
import ProductsSection from "@/components/UI/ProductsSection/ProductsSection";
import ShowcaseSection from "@/components/Home/ShowcaseSection/ShowcaseSection";
import MainNavigation from "@/components/MainNavigation/MainNav/MainNavigation";
import InfoSection from "@/components/UI/InfoSection/InfoSection";
import Footer from "@/components/UI/Footer/Footer";
import PageWrapper from "@/animations/PageWrapper";

export default function HomePage() {
  return (
    <PageWrapper>
      <MainNavigation />
      <main>
        <HeroSection />
        <ProductsSection />
        <ShowcaseSection />
        <InfoSection />
      </main>
      <Footer />
    </PageWrapper>
  );
}
