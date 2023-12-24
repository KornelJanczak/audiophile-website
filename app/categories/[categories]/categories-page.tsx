"use client";
import { IPropsProductPage } from "@/models/@type-props";
import Banner from "@/components/ProductPage/Banner/Banner";
import CategoryItem from "@/components/ProductPage/CategorySection/CategoryItem";
import { useParams } from "next/navigation";
import CategoryContent from "@/components/ProductPage/CategorySection/CategoryContent";
import ProductsSection from "@/components/UI/ProductsSection/ProductsSection";
import PageWrapper from "@/components/UI/PageWrapper";
import ResponsiveImage from "@/components/UI/ResponsiveImage";

const CategoryPage: React.FC<IPropsProductPage> = ({ categories }) => {
  const params = useParams();

  if (!categories) {
    return <p>No data</p>;
  }

  if (categories)
    return (
      <PageWrapper>
        <Banner categoryName={params.categories as string} />
        <section className="section__category">
          {categories.map((cat) => (
            <CategoryItem key={cat._id}>
              {cat.id % 2 == 0 || cat.id === 1 ? (
                <>
                  <ResponsiveImage
                    width={540}
                    height={560}
                    altText="Product image"
                    images={{
                      desktop: cat.image.desktop.slice(1),
                      mobile: cat.image.mobile.slice(1),
                      tablet: cat.image.tablet.slice(1),
                    }}
                  />
                  <CategoryContent
                    title={cat.name}
                    isNew={cat.new}
                    slug={cat.slug}
                    description={cat.description}
                  />
                </>
              ) : (
                <>
                  <CategoryContent
                    title={cat.name}
                    isNew={cat.new}
                    slug={cat.slug}
                    description={cat.description}
                  />
                  <ResponsiveImage
                    width={540}
                    height={560}
                    altText="Product image"
                    images={{
                      desktop: cat.image.desktop.slice(1),
                      mobile: cat.image.mobile.slice(1),
                      tablet: cat.image.tablet.slice(1),
                    }}
                  />
                </>
              )}
            </CategoryItem>
          ))}
        </section>
        <ProductsSection />
      </PageWrapper>
    );
};

export default CategoryPage;
