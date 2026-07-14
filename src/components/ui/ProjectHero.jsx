"use client";

import { useScroll, useTransform, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import AnimatedHeading from "./AnimatedHeading";

export default function ProjectHero({ project }) {
  //   const text = `Redefining the way people experience modern living. Our philosophy goes beyond just constructing buildings we create spaces that bring families together, nurture bonds, and inspire lifestyles rooted in comfort and elegance.`;
  const text = project.description;
  const words = text.split(" ");
  const scrollTarget = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start start", "end end"],
  });

  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);
  const [textHovered, setTextHovered] = useState(false);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(Math.round(latest));
    });
  }, [wordIndex]);

  return (
    <section ref={scrollTarget} className="w-full relative h-[200dvh]">
      <div className="w-full h-svh flex flex-col py-30 md:px-20 px-4 gap-20 sticky top-0">
        {/* Video background - contained within sticky div */}
        <div className="absolute inset-0 -z-10 bg-black overflow-hidden">
          <motion.img
            initial={{ filter: "blur(10px)" }}
            animate={{
              filter: textHovered ? "blur(10px)" : "blur(00px)",
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "easeOut",
            }}
            src={project.cover}
            // autoPlay
            // loop
            // muted
            className={`w-full h-full object-cover opacity-60 ${textHovered ? "blur-sm" : "blur-none"} transition-all duration-1000 ease-out`}
          />
        </div>

        {/* <h1 className="font-tabular font-semibold md:text-[80px] text-4xl text-white/80 mt-10">
          What We Stand For
        </h1> */}
        <div
          className="flex flex-col w-fit gap-20 justify-start items-start cursor-default"
          onMouseEnter={() => {
            setTextHovered(true);
            console.log(textHovered);
          }}
          onMouseLeave={() => {
            setTextHovered(false);
            console.log(textHovered);
          }}
        >
          <AnimatedHeading
            text={project.name}
            tag="h1"
            delay={0.6}
            duration={1.2}
            className="font-tabular font-semibold md:text-[80px] text-4xl text-white/80 mt-10"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="md:text-[30px] text-xl w-fit md:py-3 py-3 rounded-xl max-w-200 text-justify"
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
      </div>
    </section>
  );
}
