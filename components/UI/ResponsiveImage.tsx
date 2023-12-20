import Image from "next/image";

interface Data {
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  altText: string;
  width: number;
  height: number;
  pictureClassName: any | null | undefined;
  imgClassName: any | null | undefined;
}

const ResponsiveImage = ({
  images,
  altText,
  width,
  height,
  pictureClassName,
  imgClassName,
}: Data) => {
  return (
    <picture className={pictureClassName}>
      <source media="(min-width: 769px)" srcSet={images.desktop} />
      <source media="(min-width: 480px)" srcSet={images.tablet} />
      <source media="(min-width: 1px)" srcSet={images.mobile} />
      <Image
        src={images.desktop}
        alt={altText}
        width={width}
        height={height}
        className={imgClassName}
      />
    </picture>
  );
};
export default ResponsiveImage;
