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

export const isObjectFirstOfMonth = (data: any, currentObject: any) => {
  const currentMonthKey = currentObject.createdAt.toISOString().slice(0, 7);

  const isFirstOfMonth = data.every((otherObject: any) => {
    const otherMonthKey = otherObject.createdAt.toISOString().slice(0, 7);

    // Porównaj daty tylko dla tego samego miesiąca
    if (otherMonthKey === currentMonthKey) {
      return currentObject.createdAt <= otherObject.createdAt;
    }

    return true;
  });

  return isFirstOfMonth;
};
