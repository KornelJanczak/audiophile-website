"use client";
import NavigationUL from "../NavigationUL/NavigationUL";
import FbIcon from "@/public/Icons/FbIcon";
import IgIcon from "@/public/Icons/IgIcon";
import TwitterIcon from "@/public/Icons/TwitterIcon";
import classes from "./Footer.module.css";
import Link from "next/link";
import LogoIcon from "@/public/Icons/LogoIcon";
import { motion } from "framer-motion";
import { scrollVariants } from "@/animations/animations";

const icons = [
  { icon: <FbIcon /> },
  { icon: <TwitterIcon /> },
  { icon: <IgIcon /> },
];

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <motion.div
        className={classes.footer__box}
        variants={scrollVariants}
        initial={{ y: 25, opacity: 0 }}
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={classes.line} />
        <div className={classes.footer__content__box}>
          <LogoIcon className={classes.header__logo} />
          <NavigationUL className={classes.ul} />
        </div>
        <div className={classes.footer__help__box}>
          <div className={classes.text__box}>
            <span className="text__color">
              Audiophile is an all in one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we&apos;re open 7 days a week.
            </span>
            <p className="text__color">Copyright 2021. All Rights Reserved</p>
          </div>
          <ul className={classes.footer__social__ul}>
            {icons.map((icon, i) => (
              <li key={icon.icon.type.name + i}>
                <Link href={"/"}>{icon.icon}</Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
