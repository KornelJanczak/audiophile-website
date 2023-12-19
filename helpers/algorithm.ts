export function renameProduct(productName: string): string {
  const words = ["Headphones", "Speakers", "Wireless", "Earphones"];

  if (productName === undefined) return "";
  for (const word of words) {
    productName = productName.replace(new RegExp(word, "gi"), "").trim();
    productName = productName.includes("Mark")
      ? productName.replace("Mark", "MK")
      : productName;
  }

  return productName;
}
