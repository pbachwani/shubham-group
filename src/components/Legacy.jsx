"use client";

import { useRef } from "react";
import CountUp from "./ui/CountUp";
import AnimatedHeading from "./ui/AnimatedHeading";
import Image from "next/image";
import { motion } from "motion/react";

export default function Legacy() {
  const imageRef = useRef(null);

  const stats = [
    {
      number: "15+",
      label: "Projects Delivered",
    },
    {
      number: "20+",
      label: "Years of Experience",
    },
    {
      number: "500k+",
      label: "SQ. Ft. Land Delivered",
    },
    {
      number: "100+",
      label: "Skilled Teammates",
    },
  ];

  return (
    <section className="w-full bg-[#191919] py-20 md:px-20 px-4 md:min-h-dvh">
      <div className="mx-auto flex flex-col h-full">
        {/* Title */}
        <AnimatedHeading
          text={"Building Our Legacy"}
          tag="h2"
          delay={0.2}
          className="text-4xl md:text-6xl font-semibold font-tabular text-white mb-4"
        />

        {/* Stats and Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-end mt-4">
          {/* Left Section - Stats */}
          <div className="lg:col-span-2 flex flex-col md:gap-10">
            {/* Top Stats - 3 columns */}
            <div className="grid grid-cols-3 gap-12 pb-12 items-center">
              {stats.slice(0, 3).map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <p className="text-3xl md:text-6xl font-bold text-[#EA7726]">
                    <CountUp
                      from={0}
                      to={stat.number}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                      delay={0}
                    />
                    +
                  </p>
                  <p className="text-base md:text-lg text-white font-light">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="h-px bg-white/60 w-full mb-12" />
            <div className="flex flex-col md:flex-row justify-between">
              {/* Bottom Left Stat */}
              <div className="flex flex-col gap-4 mb-12">
                <p className="text-3xl md:text-6xl font-bold text-[#EA7726]">
                  <CountUp
                    from={0}
                    to={stats[3].number}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                    delay={0}
                  />
                  +
                </p>
                <p className="text-base md:text-lg text-white font-light">
                  {stats[3].label}
                </p>
              </div>

              {/* Description */}

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                className="text-lg md:text-xl text-white/70 leading-relaxed text-justify max-w-md"
              >
                Indulge in a first-class journey with our premium limousine
                services. Whether for a special occasion or everyday luxury, we
                ensure every ride is exceptional.
              </motion.p>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="hidden lg:flex justify-center items-end">
            <div
              ref={imageRef}
              className="w-fit h-full rounded-2xl shadow-2xl shadow-amber-600/30"
            >
              <Image
                width={500}
                height={180}
                src="/images/building.png"
                alt="Building"
                className="w-fit h-180 object-cover opacity-40 backdrop-blur-2xl rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
