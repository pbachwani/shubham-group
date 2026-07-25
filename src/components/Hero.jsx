"use client";

import { useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

import AnimatedHeading from "./ui/AnimatedHeading";

const text = `Enriching lives and contributing to Jaipur’s ever-evolving skyline.`;
const words = text.split(" ");

export default function Hero() {
  const scrollTarget = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start start", "end end"],
  });

  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(Math.round(latest));
    });
  }, [wordIndex]);

  return (
    <section ref={scrollTarget} className="w-full relative h-[200dvh]">
      <div className="w-full h-screen flex flex-col py-30 md:px-20 px-4 gap-20 sticky top-0">
        {/* Video background - contained within sticky div */}
        <div className="absolute inset-0 -z-10 bg-black overflow-hidden">
          <video
            src="/videos/hero-bg1.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div>
          <AnimatedHeading
            text={"Shubham Group"}
            tag="h1"
            delay={0.6}
            duration={1.2}
            className="font-tabular font-semibold md:text-[80px] text-4xl text-white/80 mt-10"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="md:text-[30px] text-xl w-fit md:py-3 py-3 px-1.5 rounded-xl max-w-200 text-justify"
        >
          {words.map((word, wordIndex) => (
            <span
              key={wordIndex}
              className={twMerge(
                "transition duration-500 font-bold text-white/40",
                wordIndex < currentWord && "text-white",
              )}
            >
              {`${word} `}
            </span>
          ))}
        </motion.p>
      </div>
    </section>
  );
}
