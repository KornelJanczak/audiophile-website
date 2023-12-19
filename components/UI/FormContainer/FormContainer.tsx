import { IPropsNode } from "@/models/@type-props";
import classes from "./FormContainer.module.css";
import Link from "next/link";
import LogoIcon from "@/public/Icons/LogoIcon";
import { usePathname } from "next/navigation";

const FormContainer: React.FC<IPropsNode> = ({ children }) => {
  const params = usePathname();

  const whichForm = params === "/register";

  return (
    <section className={classes.section}>
      <div className={classes.container__login}>
        <Link href={"/"} className={classes.logo}>
          <LogoIcon />
        </Link>
        <div className={classes.container__content}>
          <h2>{whichForm ? "Sign Up" : "Sign In"}</h2>
          <Link href={whichForm ? "/sign-in" : "/register"}>
            {whichForm ? "Login" : "Register"}
          </Link>
        </div>
        {children}
      </div>
    </section>
  );
};

export default FormContainer;
