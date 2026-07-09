import AboutHero from "@/components/AboutHero";
import FutureValues from "@/components/FurureValues";
import Legacy from "@/components/Legacy";
import SectionHeading from "@/components/ui/SectionHeading";

import React from "react";
import Craft from "@/components/ui/Craft";
import Team from "@/components/Team";
import Founders from "@/components/Founders";

const About = () => {
  return (
    <main className="w-full h-full min-h-svh flex flex-col relative">
      {/* About Hero */}
      {/* <section className="w-full h-[200dvh] relative">
        <div className="w-full h-svh flex flex-col py-30 md:px-20 px-4 gap-20">
          <div>
            <h1 className="font-tabular font-semibold md:text-8xl text-5xl text-white/80 mt-10 tracking-">
              What We Stand For
            </h1>
          </div>
          <p className="text-white/50 md:text-[30px] text-xl bg-black/20 w-fit md:px-5 md:py-3 py-3 px-1.5 rounded-xl max-w-200 text-justify">
            Redefining the way people experience modern living. Our philosophy
            goes beyond just constructing buildings we create spaces that bring
            families together, nurture bonds, and inspire lifestyles rooted in
            comfort and elegance.
          </p>
        </div>

        <div className="absolute inset-0 w-full h-svh -z-10 bg-black">
          <video
            src="/videos/hero-bg1.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-60"
          />
        </div>
      </section> */}
      <AboutHero />
      <FutureValues />
      <Legacy />
      <Craft />
      <Founders />
      <Team />

      {/* Dreams Section */}
      {/* <section className="w-full min-h-svh px-4 md:px-20 py-10">
        <SectionHeading texts={["Crafting Dreams", "Creating Legacies"]} />
        <div className="flex justify-start items-start w-full">
          <p className="max-w-xl">
            For years, Shubham Group has stood as one of Jaipur&apos;s trusted
            and admired real estate developers, redefining the way people
            experience modern living. Our philosophy goes beyond just
            constructing buildings we create spaces that bring families
            together, nurture bonds, and inspire lifestyles rooted in comfort
            and elegance.
          </p>
        </div>
        <div className="flex justify-center items-start w-full py-4">
          <p className="max-w-xl">
            Guided by vision and driven by passion, we have consistently
            delivered projects that blend innovation with timeless design. Every
            home we build reflects our commitment to quality, trust, and
            customer satisfaction, making us a name that generations of
            homeowners rely on.
          </p>
        </div>
        <div className="flex justify-end items-start w-full">
          <p className="max-w-xl">
            With every project, Shubham Group seeks to enrich lives and
            contribute to Jaipur&apos;s ever-evolving skyline. We believe in
            shaping not only homes but also vibrant communities where happiness
            thrives, memories are made, and legacies are built. Our promise is
            simple yet profound: to turn your dream of a perfect home into a
            lasting reality.
          </p>
        </div>
      </section> */}
    </main>
  );
};

export default About;
