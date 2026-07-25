"use client";
import Link from "next/link";
import React from "react";
import StaggeredMenu from "./ui/StaggeredMenu";

const Navbar = () => {
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
      <nav className="fixed top-0 inset-0 w-full h-fit z-50">
        {/* <div className="md:hidden h-dvh pointer-events-none">
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials
            displayItemNumbering={true}
            menuButtonColor="#ffffff"
            openMenuButtonColor="#fff"
            changeMenuColorOnOpen={true}
            colors={["#B497CF", "#5227FF"]}
            logoUrl="/path-to-your-logo.svg"
            accentColor="#5227FF"
            onMenuOpen={() => console.log("Menu opened")}
            onMenuClose={() => console.log("Menu closed")}
          />
        </div> */}
        <div className="w-full h-full flex items-center justify-between md:px-10 px-4 my-2 relative">
          <Link href="/" className="flex h-full">
            <img
              src="/images/logo-black.png"
              alt="Shubham Group Logo"
              className="md:h-15 h-12 w-auto object-contain"
            />
          </Link>

          <div className="max-md:hidden absolute left-1/2 -translate-x-1/2 flex gap-8 bg-black/50 px-10 py-2 rounded-xl text-white mix-blend-difference font-bold font-tabular uppercase">
            <Link href="/" className="">
              Home
            </Link>
            <Link href="/about" className="">
              About
            </Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="md:hidden">menu</div>

          {/* <div>
          <button className="text-[#EA7726] font-extrabold">Inquire Now</button>
        </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
