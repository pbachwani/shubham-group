"use client";
import Link from "next/link";
import React, { useState } from "react";
import StaggeredMenu from "./ui/StaggeredMenu";
import { AnimatePresence } from "motion/react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "/about" },
    { label: "Projects", ariaLabel: "View our projects", link: "/projects" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];
  return (
    <>
      <nav
        className={`fixed top-0 inset-0 w-full h-fit z-50 transition-all duration-500 ease-out ${navOpen ? "bg-black" : "bg-none"}`}
      >
        <div className="w-full h-fit flex items-center justify-between md:px-10 px-4 py-2 relative">
          <Link href="/" className="flex h-full z-50">
            <AnimatePresence mode="wait">
              {navOpen ? (
                <img
                  src={"/images/logo.png"}
                  alt="Shubham Group Logo"
                  className="md:h-15 h-12 w-auto object-contain transition-all duration-500 ease-out"
                />
              ) : (
                <img
                  src={"/images/logo-black.png"}
                  alt="Shubham Group Logo"
                  className="md:h-15 h-12 w-auto object-contain transition-all duration-500 ease-out"
                />
              )}
            </AnimatePresence>
          </Link>

          <div className="max-md:hidden  absolute left-1/2 -translate-x-1/2 flex gap-8 bg-black/50 px-10 py-2 h-fit rounded-xl text-white mix-blend-difference font-bold font-tabular uppercase">
            <Link href="/" className="">
              Home
            </Link>
            <Link href="/about" className="">
              About
            </Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="md:hidden flex justify-center items-center  z-50">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="text-[#EA7726] font-extrabold"
            >
              menu
            </button>
          </div>
        </div>
        <div
          className={`md:hidden w-full absolute min-h-screen text-white pt-2 ${navOpen ? "translate-x-0 bg-black" : "translate-x-full bg-black/10"} transition-transform duration-700 ease-[cubic-bezier(0.23, 1, 0.32, 1)]`}
        >
          <div className="flex flex-col w-full gap-4 justify-start items-end px-8 py-12">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="text-4xl font-gotu"
                onClick={() => setNavOpen(!navOpen)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
