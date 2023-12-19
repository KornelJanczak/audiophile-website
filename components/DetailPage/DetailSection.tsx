import { IDetailSection } from "@/models/@type-props";

const DetailSection: React.FC<IDetailSection> = ({
  headContent,
  infoContent,
  galleryContent,
  otherProducts,
  productsSection,
}) => {
  return (
    <section className="section__detail">
      {headContent}
      {infoContent}
      {galleryContent}
      {otherProducts}
      {productsSection}
    </section>
  );
};

export default DetailSection;
