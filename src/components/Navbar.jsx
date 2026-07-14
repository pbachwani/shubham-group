import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-fit z-50">
      <div className="w-full h-full flex items-center justify-between md:px-10 px-4 py-2 relative">
        <Link href="/">
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
        {/* <div>
          <button className="text-[#EA7726] font-extrabold">Inquire Now</button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
