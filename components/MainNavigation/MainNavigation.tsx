"use client";
import Link from "next/link";
import classes from "./MainNavigation.module.css";
import Image from "next/image";
import cartImg from "../../public/assets/shared/desktop/icon-cart.svg";
import NavigationUL from "../UI/NavigationUL/NavigationUL";
import UserIcon from "@/public/Icons/UserIcon";
import { useState } from "react";
import Cart from "./Cart";
import Overlay from "@/components/UI/Overlay";
import { useSession } from "next-auth/react";
import UserPanel from "./UserPanel";
import Logo from "../UI/Logo/Logo";
import { AnimatePresence } from "framer-motion";
import { useRef } from "react";
import HamburgerIcon from "@/public/Icons/HamburgerIcon";
import ProductsSection from "../UI/ProductsSection/ProductsSection";
import { motion } from "framer-motion";

export default function MainNavigation() {
  const [cart, setCart] = useState<boolean>(false);
  const [userPanel, setUserPanel] = useState<boolean>(false);
  const [mobileNav, setMobileNav] = useState<boolean>(false);
  const { data: session } = useSession();

  const isOverlay = cart || userPanel || mobileNav;
  const navRef = useRef<HTMLElement>(null);

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {isOverlay && (
          <Overlay
            onOverlay={() => {
              if (cart) {
                setCart(false);
              } else {
                setUserPanel(false);
              }
            }}
            position={{ top: "10%", left: 0 }}
          />
        )}
      </AnimatePresence>
      <header className={classes.header}>
        <nav
          className={`${classes.nav}  ${
            (cart || userPanel) && classes.nav__border
          }`}
          ref={navRef}
        >
          <button
            className={classes.mobile__nav__btn}
            onClick={() => {
              setMobileNav((mobileNav) => !mobileNav);
            }}
          >
            <HamburgerIcon />
          </button>
          <Logo className={classes.main_logo} />
          <NavigationUL className={classes.nav__ul} />
          <div className={classes.icons}>
            {session ? (
              <button
                onClick={() => {
                  setCart(false);
                  setMobileNav(false);
                  setUserPanel((panel) => !panel);
                }}
              >
                <UserIcon />
              </button>
            ) : (
              <Link href={"/sign-in"}>
                <UserIcon />
              </Link>
            )}
            <Image
              src={cartImg}
              alt="cart"
              height={24}
              width={24}
              className={classes.cart__img}
              onClick={() => {
                setUserPanel(false);
                setMobileNav(false);
                setCart((cart) => !cart);
              }}
            />
          </div>
          <AnimatePresence>
            {userPanel && <UserPanel />}
            {cart && <Cart />}
            {mobileNav && (
              <motion.div
                initial={{ opacity: 0, y: 0, x: 0 }}
                animate={{ opacity: 1, y: 20, x: 0 }}
                exit={{ opacity: 0, y: -100, x: 0 }}
                transition={{ duration: 0.2 }}
                // initial="closed"
                // animate={mobileNav ? "opened" : "closed"}
              >
                <ProductsSection mobileClass={classes.responsive__nav} />
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
}
