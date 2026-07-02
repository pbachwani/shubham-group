import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-fit z-999">
      <div className="w-full h-full flex items-center justify-between md:px-10 px-4 md:py-2 py-10">
        <div>
          <Link href="/">
            <img
              src="/images/logo-small.png"
              alt="Shubham Group Logo"
              className="md:h-15 h-12 w-auto object-contain"
            />
          </Link>
        </div>
        <div className="max-md:hidden flex gap-4 bg-black/50 px-10 py-2 rounded-xl text-white mix-blend-difference text-xl font-bold">
          <Link href="/about" className="mix-blend-difference">
            About
          </Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <button className="text-[#EA7726] font-extrabold">Inquire Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
