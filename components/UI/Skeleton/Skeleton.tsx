import classes from "./Skeleton.module.css";

const SkeletonCard: React.FC<{
  length: number;
  classNameUL?: string;
  classNameLI?: string;
}> = ({ length, classNameUL, classNameLI }) => {
  return (
    <ul className={`${classes.ul} ${classNameUL}`}>
      {[...new Array(length)].map((_, i) => (
        <li
          className={`${classes.container} ${classes.skeleton} ${classNameLI}`}
          key={i}
        />
      ))}
    </ul>
  );
};

export default SkeletonCard;
