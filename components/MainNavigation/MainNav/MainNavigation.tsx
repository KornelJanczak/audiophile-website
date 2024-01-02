"use client";
import Link from "next/link";
import classes from "./MainNavigation.module.css";
import NavigationUL from "../../UI/NavigationUL/NavigationUL";
import UserIcon from "@/public/Icons/UserIcon";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Overlay from "@/components/UI/Overlay";
import { useSession } from "next-auth/react";
import UserPanel from "../UserPanel/UserPanel";
import Logo from "../../UI/Logo/Logo";
import { AnimatePresence } from "framer-motion";
import { useRef } from "react";
import HamburgerIcon from "@/public/Icons/HamburgerIcon";
import ProductsSection from "../../UI/ProductsSection/ProductsSection";
import CartIcon from "@/public/Icons/CartIcon";

export default function MainNavigation() {
  const { data: session } = useSession();
  const [cart, setCart] = useState<boolean>(false);
  const [userPanel, setUserPanel] = useState<boolean>(false);
  const [mobileNav, setMobileNav] = useState<boolean>(false);
 
  return (
    <header className={classes.header}>
      <nav
        className={`${classes.nav}  ${
          (cart || userPanel) && classes.nav__border
        }`}
      >
        <button
          className={classes.mobile__nav__btn}
          onClick={() => {
            setMobileNav((mobileNav) => !mobileNav);
            setCart(false);
            setUserPanel(false);
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
                setUserPanel((panel) => !panel);
                setCart(false);
                setMobileNav(false);
              }}
            >
              <UserIcon />
            </button>
          ) : (
            <Link href={"/sign-in"}>
              <UserIcon />
            </Link>
          )}
          <button
            className={classes.cart__btn}
            onClick={() => {
              setCart((cart) => !cart);
              setUserPanel(false);
              setMobileNav(false);
            }}
          >
            <CartIcon />
          </button>
        </div>
        <AnimatePresence>
          {userPanel && <UserPanel closePanel={() => setUserPanel(false)} />}
          {cart && <Cart closeCart={() => setCart(false)} />}
          {mobileNav && (
            <>
              <Overlay
                position={{ top: "9.8rem", left: 0 }}
                onOverlay={() => setMobileNav(false)}
              />

              <ProductsSection mobileClass={classes.responsive__nav} />
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
