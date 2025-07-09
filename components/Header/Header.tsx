import React, { useRef, useState, useEffect } from "react";
import Logo from "./Headercomp/Logo";
import DesktopMenu from "./Headercomp/DesktopMenu";
import IconMenu from "./Headercomp/IconMenu";
import MobileMenu from "./Headercomp/MobileMenu";
import { motion } from "framer-motion";

const Header = () => {
  const RefNavBar = useRef<HTMLDivElement>(null);
  const [ShowElement, setShowElement] = useState(true);
  const [rotate, setRotate] = useState<boolean>(false);
  const scrollSizeY = useRef<number>(0);
  const intervalEventRef = useRef<(() => void) | null>(null);

  // Define the EventListener for the NavBar
  useEffect(() => {
    if (intervalEventRef.current == null) {
      intervalEventRef.current = () => {
        if (scrollSizeY.current == 0) {
          scrollSizeY.current = window.scrollY;
        } else {
          if (window.scrollY > 50) {
            if (window.scrollY > scrollSizeY.current) {
              if (RefNavBar) {
                RefNavBar.current?.classList.remove("translate-y-0");
                RefNavBar.current?.classList.add("-translate-y-full");
              }
            } else {
              RefNavBar.current?.classList.add("translate-y-0");
              RefNavBar.current?.classList.remove("-translate-y-full");
            }
            scrollSizeY.current = window.scrollY;
          }
        }
        console.log("Scrolling checking for NavBar ", scrollSizeY.current);
      };
    }
  }, []);

  //Adding the EventListener for the NavBar
  useEffect(() => {
    scrollSizeY.current = 0;
    //Hide when scroll down & show when scroll up
    if (typeof window !== "undefined" && intervalEventRef.current) {
      window.addEventListener("scroll", intervalEventRef.current);
    }

    return () => {
      if (typeof window !== "undefined" && intervalEventRef.current) {
        window.removeEventListener("scroll", intervalEventRef.current);
      }
    };
  }, []);

  console.log("rotate from header : ", rotate);
  //veify document for serverSide rendering
  if (typeof document !== "undefined") {
    rotate
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }

  return (
    <>
      {/* Mobile visible Navbar component, controlling ShowElement state to hide itself and rotate itself */}
      <MobileMenu
        rotate={rotate}
        setRotate={setRotate}
        setShowElement={setShowElement}
        ShowElement={ShowElement}
      />
      {/* This parent element for Menu */}
      <motion.div
        ref={RefNavBar}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { duration: 0.2 } }}
        className={`w-full fixed ${
          ShowElement ? `bg-opacity-70 shadow-xl` : `bg-opacity-0 `
        } bg-AAprimary flex 
      justify-between px-6 sm:px-12 py-2 sm:py-4  transition duration-4000 translate-y-0 z-20`}
      >
        {/* Logo A */}
        <Logo />

        {/* Hide icon Designed by me */}

        <IconMenu
          rotate={rotate}
          setRotate={setRotate}
          setShowElement={setShowElement}
          ShowElement={ShowElement}
        />

        {/* ? Desktop Menu by Titof */}
        <DesktopMenu />
      </motion.div>
    </>
  );
};
export default Header;
