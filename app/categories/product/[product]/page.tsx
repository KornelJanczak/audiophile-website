import { fetchData } from "@/utils/mongodb";
import DetailPage from "./product-page";
import { Suspense } from "react";
import SkeletonCard from "@/components/UI/Skeleton/Skeleton";

export async function generateStaticParams() {
  const data = await fetchData("audiohile-db", "audiophile-content");
  const paths = data.map((categories) => {
    return {
      categories: categories.category,
      product: categories.slug,
    };
  });
  return paths;
}

async function getProducts(params: any) {
  const data = await fetchData("Audiophile", "website-content");
  const [filteredData] = data.filter((item) => item.slug === params!.product);
  return filteredData;
}

export default async function ProductPage({ params }: any) {
  const product = await getProducts(params);

  return <DetailPage product={product} />;
}
