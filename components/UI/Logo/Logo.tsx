import Link from "next/link";
import LogoIcon from "@/public/Icons/LogoIcon";
import classes from "./Logo.module.css";

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Link href={"/"} className={`${classes.logo} ${className}`}>
      <LogoIcon />
    </Link>
  );
};

export default Logo;
