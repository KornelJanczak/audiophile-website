import { connect, fetchData } from "@/utils/mongodb";
import DetailPage from "./product-page";


export async function generateStaticParams() {
  await connect();
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
  await connect();
  const data = await fetchData("Audiophile", "website-content");
  const [filteredData] = data.filter((item) => item.slug === params!.product);
  return filteredData;
}

export default async function ProductPage({ params }: any) {
  const product = await getProducts(params);

  return <DetailPage product={product} />;
}
