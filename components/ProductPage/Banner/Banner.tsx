import classes from "./Banner.module.css";
const Banner: React.FC<{ categoryName: string }> = ({ categoryName }) => {
  return (
    <section className={classes.section__baner}>
      <h2>{categoryName}</h2>
    </section>
  );
};

export default Banner;
