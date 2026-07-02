"use client";

import Image from "next/image";
import React from "react";

import { motion } from "motion/react";

const logos = [
  { name: "Quantum", image: "/images/project-logos/1.png" },
  { name: "Acme Corp", image: "/images/project-logos/2.png" },
  { name: "Echo Valley", image: "/images/project-logos/3.png" },
  { name: "Pulse", image: "/images/project-logos/4.png" },
  { name: "Outside", image: "/images/project-logos/5.png" },
];

export default function LogoTicker() {
  return (
    <section className="py-12 overflow-x-clip">
      <div className="mx-auto space-y-10">
        <h3 className="text-center text-black/50 text-xl">
          Already chosen by these market leaders
        </h3>
        <div
          className={`flex overflow-hidden bg-blue-300/0 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]`}
        >
          <motion.div
            animate={{ x: "-50%" }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-24 pr-24"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <React.Fragment key={i}>
                {logos.map((logo) => (
                  <img
                    className="grayscale hover:grayscale-0 transition-all h-20 md:h-36 w-auto object-cover"
                    src={logo.image}
                    key={logo.name}
                    alt={logo.name}
                  />
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
