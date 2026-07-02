"use client";

import { AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import AnimatedHeading from "./ui/AnimatedHeading";

export default function FutureValues() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState("");

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;

    const sectionRect = sectionRef.current.getBoundingClientRect();
    const mouseX = e.clientX - sectionRect.left;
    const mouseY = e.clientY - sectionRect.top;

    setMousePosition({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#191919] py-20 h-fit pt-40 relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* <div className="absolute bottom-0 left-30">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          src="/images/vision.jpg"
          alt=""
          className="w-40 h-auto object-cover -z-50 opacity-60"
        />
      </div> */}
      <div className="mx-auto relative h-fit md:px-20 px-4">
        {/* Title */}
        {/* <h2 className="text-4xl md:text-7xl font-semibold font-tabular text-white mb-20 md:mb-32">
          Our Values for the Future
        </h2> */}
        <AnimatedHeading
          text={"Our Values for the Future"}
          tag="h2"
          delay={0.2}
          className="text-4xl md:text-7xl font-semibold font-tabular text-white mb-20 md:mb-32"
        />

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20 z-50 cursor-default">
          {/* Vision */}
          <div
            className="flex flex-col gap-6"
            onMouseEnter={() => setHovered("vision")}
            onMouseLeave={() => setHovered("")}
          >
            <h3 className="text-3xl md:text-4xl font-light text-white">
              Vision
            </h3>
            <p className="text-lg md:text-2xl text-white text-justify leading-relaxed">
              Our vision is to be recognized as one of Jaipur&apos;s most
              trusted and forward-thinking real estate developers. We aspire to
              set new benchmarks in architecture, sustainability, and customer
              satisfaction while building vibrant, well-planned communities
              where families can grow, connect, and thrive for generations.
            </p>
          </div>

          {/* Mission */}
          <div
            className="flex flex-col gap-6"
            onMouseEnter={() => setHovered("mission")}
            onMouseLeave={() => setHovered("")}
          >
            <h3 className="text-3xl md:text-4xl font-light text-white md:text-right">
              Mission
            </h3>
            <p className="text-lg md:text-2xl text-white text-justify leading-relaxed">
              At Shubham Group, our mission is to create exceptional living
              spaces that combine modern design, superior quality, and
              long-lasting value. We aim to deliver homes and communities that
              not only meet but exceed the expectations of our customers,
              reflecting trust, innovation, and a deep understanding of their
              lifestyle needs.
            </p>
          </div>
        </div>

        {/* Image Placeholder - attached to cursor */}
        <div
          ref={imageRef}
          className="max-md:hidden w-40 h-auto rounded-2xl overflow-hidden transition-transform duration-100 ease-out pointer-events-none absolute"
          style={{
            transform: `translate(calc(-50% + ${mousePosition.x}px), calc(-800% + ${mousePosition.y}px))`,
          }}
        >
          <AnimatePresence>
            {hovered === "mission" && (
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                src="/images/mission.jpg"
                alt=""
                className="w-full h-full object-cover -z-50 opacity-60"
              />
            )}
            {/* {hovered === "vision" && (
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                src="/images/vision.jpg"
                alt=""
                className="w-full h-full object-cover -z-50 opacity-60"
              />
            )} */}
            {hovered === "" && (
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                src="/images/vision.jpg"
                alt=""
                className="w-40 h-auto object-cover -z-50 opacity-60"
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
