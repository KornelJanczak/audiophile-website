"use client"
import { useRouter } from "next/navigation";
import classes from "./BackButton.module.css";

const BackButton: React.FC<{
  route?: string;
  className?: string;
  padding?: string;
}> = ({ route, className, padding }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => (route ? router.push(route) : router.back())}
      className={`${className}, ${classes.back__btn}`}
      style={{
        padding: padding ? padding : "18.8rem 0rem 6.4rem 0rem",
      }}
    >
      Go back
    </button>
  );
};

export default BackButton;
