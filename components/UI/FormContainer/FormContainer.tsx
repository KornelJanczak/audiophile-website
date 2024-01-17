import { IPropsNode } from "@/models/@type-props";
import classes from "./FormContainer.module.css";
import Link from "next/link";
import LogoIcon from "@/public/Icons/LogoIcon";

const FormContainer: React.FC<IPropsNode> = ({
  children,
  title,
  route,
  routeTitle,
  style,
}) => {
  return (
    <section className={classes.section} style={{ ...style }}>
      <div className={classes.container__login}>
        <Link href={"/"} className={classes.logo}>
          <LogoIcon />
        </Link>
        <div className={classes.container__content}>
          <h2>{title}</h2>
          <Link href={(route! as string) ? route : "/"}>{routeTitle}</Link>
        </div>
        {children}
      </div>
    </section>
  );
};

export default FormContainer;
