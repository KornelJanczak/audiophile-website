import Image from "next/image";

const CategoryImage: React.FC<any> = ({ image }) => {
  const img = require("../../../public/" + image.desktop.slice(2)) as string;

  return (
    <Image
      src={img}
      alt="product-img"
      width={540}
      height={560}
      placeholder="blur"
      loading="lazy"
    />
  );
};

export default CategoryImage;
