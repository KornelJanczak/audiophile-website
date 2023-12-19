"use client";
import { IPropsProductPage, Product } from "@/models/@type-props";
import Banner from "@/components/ProductPage/Banner/Banner";
import CategoryItem from "@/components/ProductPage/CategorySection/CategoryItem";
import { useParams, usePathname } from "next/navigation";
import CategoryImage from "@/components/ProductPage/CategorySection/CategoryImage";
import CategoryContent from "@/components/ProductPage/CategorySection/CategoryContent";
import ProductsSection from "@/components/UI/ProductsSection/ProductsSection";
import PageWrapper from "@/components/UI/PageWrapper";

const CategoryPage: React.FC<IPropsProductPage> = ({ categories }) => {
  const params = useParams();
  const pathname = usePathname();

  console.log(pathname, "PATH");

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
                  <CategoryImage image={cat.categoryImage} />
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
                  <CategoryImage image={cat.categoryImage} />
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
