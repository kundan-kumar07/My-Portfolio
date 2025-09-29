import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { Outfit, Ovo } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

const ovo = Ovo({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const [isScroll, setIscroll] = useState(false);
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIscroll(true);
      } else {
        setIscroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className="fixed top-0 right-0">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm"
            : "bg-transparent"
        }`}
      >
        <a href="#top">
         <h1 className={`text-3xl font-bold cursor-pointer mr-14 ${ovo.className}`}>
  Kundan<span className="text-pink-600">.</span>
</h1>

        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          } `}
        >
          <li>
            <a href="#top" className={`${ovo.className}`}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={`${ovo.className}`}>
              About me
            </a>
          </li>
          <li>
            <a href="#services" className={`${ovo.className}`}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" className={`${ovo.className}`}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className={`${ovo.className}`}>
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          
          <a
            href="#contact"
            className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 ${ovo.className}`}
          >
            Contact{" "}
            <Image src={assets.arrow_icon} alt="Contact" className="w-3" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* ---Mobile Menu--- */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a href="#top" className={`${ovo.className}`} onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={`${ovo.className}`} onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`${ovo.className}`}
              onClick={closeMenu}
            >
              Services
            </a>
          </li>
          <li>
            <a href="#work" className={`${ovo.className}`} onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`${ovo.className}`}
              onClick={closeMenu}
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
