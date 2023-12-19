"use client";
import NavigationUL from "../NavigationUL/NavigationUL";
import logoImg from "../../../public/assets/shared/desktop/logo.svg";
import FbIcon from "@/public/Icons/FbIcon";
import IgIcon from "@/public/Icons/IgIcon";
import TwitterIcon from "@/public/Icons/TwitterIcon";
import classes from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  const icons = [
    { icon: <FbIcon /> },
    { icon: <TwitterIcon /> },
    { icon: <IgIcon /> },
  ];

  return (
    <footer className={classes.footer}>
      <div className={classes.footer__box}>
        <div className={classes.footer__content__box}>
          <Image
            src={logoImg}
            alt="logo"
            height={25}
            width={143}
            className={classes.header__logo}
          />
          <span>
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </span>
          <p>Copyright 2021. All Rights Reserved</p>
        </div>
        <div className={classes.footer__help__box}>
          <NavigationUL />
          <ul className={classes.footer__social__ul}>
            {icons.map((icon, i) => (
              <li key={i}>
                <Link href={"/"}>{icon.icon}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
