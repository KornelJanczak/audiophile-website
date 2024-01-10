import classes from "./Skeleton.module.css";

const SkeletonCard: React.FC<{ length: number }> = ({ length }) => {
  console.log(length);

  return (
    <ul className={classes.order__ul}>
      {[...new Array(length)].map((_, i) => (
        <li className={classes.container} key={i} />
      ))}
    </ul>
  );
};

export default SkeletonCard;