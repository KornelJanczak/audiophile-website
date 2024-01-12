import { fetchData } from "@/utils/mongodb";
import CategoryPage from "./categories-page";
import { Suspense } from "react";
import SkeletonCard from "@/components/UI/Skeleton/Skeleton";
export async function generateStaticParams() {
  const data = await fetchData("audiohile-db", "audiophile-content");
  const ids = data.map((category) => category.category);
  const params = Array.from(new Set(ids));
  return params.map((categories) => ({ categories }));
}

export default async function CategoriesPage(params: {
  params: { categories: string };
}) {
  const data = await fetchData("Audiophile", "website-content");

  const filteredData = data.filter(
    (item) => item.category === (params.params.categories as string)
  );

  return <CategoryPage categories={filteredData} />;
}
