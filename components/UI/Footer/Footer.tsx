"use client";
import NavigationUL from "../NavigationUL/NavigationUL";
import FbIcon from "@/public/Icons/FbIcon";
import IgIcon from "@/public/Icons/IgIcon";
import TwitterIcon from "@/public/Icons/TwitterIcon";
import classes from "./Footer.module.css";
import Link from "next/link";
import LogoIcon from "@/public/Icons/LogoIcon";
import ScrollWrapper from "@/animations/ScrollWrapper";
import { Variants, motion } from "framer-motion";
import { scrollVariants } from "@/animations/animations";

const icons = [
  { icon: <FbIcon /> },
  { icon: <TwitterIcon /> },
  { icon: <IgIcon /> },
];

const footerVariants: Variants = {
  ...scrollVariants,
  offscreen: { y: 60, opacity: 0 },
};

const Footer: React.FC = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer__box}>
        <div className={classes.line} />
        <ScrollWrapper className={classes.footer__content__box}>
          <LogoIcon className={classes.header__logo} />
          <NavigationUL className={classes.ul} />
        </ScrollWrapper>
        <motion.div
          className={classes.footer__help__box}
          variants={footerVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
