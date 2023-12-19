import Link from "next/link";
import classes from "./NavigationUL.module.css";

const NavigationUL: React.FC = () => {
  return (
    <ul className={classes.nav__ul}>
      <li className={classes.nav__li}>
        <Link href="/">Home</Link>
      </li>
      <li className={classes.nav__li}>
        <Link href="/categories/headphones">HeadPhones</Link>
      </li>
      <li className={classes.nav__li}>
        <Link href="/categories/speakers">Speakers</Link>
      </li>
      <li className={classes.nav__li}>
        <Link href="/categories/earphones">Earphones</Link>
      </li>
    </ul>
  );
};

export default NavigationUL;
