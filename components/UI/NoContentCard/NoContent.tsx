"use client";
import Button from "../Button/Button";
import classes from "./NoContent.module.css";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const NoContent: React.FC<{
  content: string;
  btnContent: string;

  className?: string;
}> = ({ content, btnContent, className }) => {
  const router = useRouter();

  return (
    <motion.div
      className={`${classes.empty__cart} ${className}`}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      key="fallback"
    >
      <p style={{ textAlign: "center" }}>{content}</p>
      <Button style={classes.continue_btn} onClick={() => router.push("/")}>
        {btnContent}
      </Button>
    </motion.div>
  );
};

export default NoContent;
