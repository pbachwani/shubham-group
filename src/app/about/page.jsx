import AboutHero from "@/components/AboutHero";
import FutureValues from "@/components/FurureValues";
import Legacy from "@/components/Legacy";

import React from "react";
import Craft from "@/components/ui/Craft";
import Team from "@/components/Team";
import Founders from "@/components/Founders";

const About = () => {
  return (
    <main className="relative">
      <AboutHero />
      <FutureValues />
      <Legacy />
      <Craft />
      <Founders />
      {/* <Team /> */}
    </main>
  );
};

export default About;
