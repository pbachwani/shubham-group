import About from "@/components/About";
import Elegance from "@/components/Elegance";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import LogoTicker from "@/components/ui/LogoTicker";
import ScrollExpandImage from "@/components/ui/ScrollExpandImage";
import React from "react";

const Homepage = () => {
  return (
    <main className="max-w-screen">
      <Hero />
      <About />
      <Elegance />
      <LogoTicker />
      {/* <ScrollExpandImage /> */}
      <Trust />
    </main>
  );
};

export default Homepage;
