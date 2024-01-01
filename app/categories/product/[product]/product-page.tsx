"use client";
import DetailProduct from "@/components/DetailPage/DetailProduct/DetailProduct";
import DetailInfo from "@/components/DetailPage/DetailInfo/DetailInfo";
import DetailGallery from "@/components/DetailPage/DetailGallery/DetailGallery";
import { IPropsDetailPage } from "@/models/@type-props";
import DetailOthers from "@/components/DetailPage/DetailOthers/DetailOthers";
import ProductsSection from "@/components/UI/ProductsSection/ProductsSection";
import PageWrapper from "@/components/UI/PageWrapper";

const DetailPage: React.FC<IPropsDetailPage> = ({ product }) => {
  return (
    <PageWrapper>
      <section className="section__detail">
        <DetailProduct
          _id={product._id}
          name={product.name}
          description={product.description}
          price={product.price}
          isNew={product.new}
          image={product.image}
        />

        <DetailInfo features={product.features} includes={product.includes} />
        <DetailGallery gallery={product.gallery} />
        <DetailOthers others={product.others} />
        <ProductsSection />
      </section>
    </PageWrapper>
  );
};

export default DetailPage;
