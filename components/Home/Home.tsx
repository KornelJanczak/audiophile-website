"use client";
import HeroSection from "./HeroSection/HeroSection";
import ProductsSection from "../UI/ProductsSection/ProductsSection";
import ShowcaseSection from "./ShowcaseSection/ShowcaseSection";
import MainNavigation from "../MainNavigation/MainNavigation";
import InfoSection from "../UI/InfoSection/InfoSection";
import Footer from "../UI/Footer/Footer";
import PageWrapper from "../UI/PageWrapper";

export default function Home() {

  return (
    <PageWrapper>
      <MainNavigation />
      <main>
        <HeroSection />
        <ProductsSection  />
        <ShowcaseSection />
        <InfoSection />
      </main>
      <Footer />
    </PageWrapper>
  );
}
