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

export default function MainNavigation() {
  const [cart, setCart] = useState<boolean>(false);
  const [userPanel, setUserPanel] = useState<boolean>(false);
  const { data: session } = useSession();

  const isOverlay = cart || userPanel;

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
        <nav className={`${classes.nav}  ${cart && classes.nav__border}`}>
          <Logo className={classes.main_logo} />
          <NavigationUL />
          <div className={classes.icons}>
            {session ? (
              <button
                onClick={() => {
                  setCart(false);
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
                setCart((cart) => !cart);
              }}
            />
          </div>
          <AnimatePresence>
            {userPanel && <UserPanel />}
            {cart && <Cart />}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
}
