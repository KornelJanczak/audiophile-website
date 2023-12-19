"use client";
import classes from "./ProductsSection.module.css";
import headphonesImg from "../../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImg from "../../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earnphonesImg from "../../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import Product from "./Prodcut";


const products = [
  {
    img: headphonesImg,
    title: "HEADPHONES",
  },
  {
    img: speakersImg,
    title: "SPEAKERS",
  },
  {
    img: earnphonesImg,
    title: "EARNPHONES",
  },
];

const ProductsSection: React.FC = () => {
  return (
    <section className={classes.products__section}>
      <div className={classes.products}>
        {products.map((product, i) => (
          <Product key={i} img={product.img} title={product.title} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
