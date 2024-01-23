import ProductsSection from "@/components/UI/ProductsSection/ProductsSection";
import ShowcaseSection from "@/components/Home/ShowcaseSection/ShowcaseSection";
import MainNavigation from "@/components/MainNavigation/MainNav/MainNavigation";
import InfoSection from "@/components/UI/InfoSection/InfoSection";
import Footer from "@/components/UI/Footer/Footer";
import PageWrapper from "@/animations/PageWrapper";
import dynamic from "next/dynamic";

const DynamicHero = dynamic(
  () => import("@/components/Home/HeroSection/HeroSection"),
  {
    ssr: false,
  }
);

export default function HomePage() {
  return (
    <PageWrapper>
      <MainNavigation />
      <main>
        <DynamicHero />
        <ProductsSection />
        <ShowcaseSection />
        <InfoSection />
      </main>
      <Footer />
    </PageWrapper>
  );
}
