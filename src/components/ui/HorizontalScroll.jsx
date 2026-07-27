"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/app/constants/data";
import AnimatedHeading from "./AnimatedHeading";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    title: "Swimming Pool",
    color: "bg-red-400",
    image: "/placeholder.jpg",
  },
  {
    title: "Skating Ring",
    color: "bg-blue-400",
    image: "/placeholder.jpg",
  },
  {
    title: "Yoga Deck",
    color: "bg-orange-400",
    image: "/placeholder.jpg",
  },
  {
    title: "Club Area",
    color: "bg-yellow-400",
    image: "/placeholder.jpg",
  },
  {
    title: "Badminton Court",
    color: "bg-green-400",
    image: "/placeholder.jpg",
  },
];

export default function HorizontalScroll({ project }) {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          end: () => "+=" + window.innerWidth * (sections.length - 1),
        },
      });

      sections.forEach((panel) => {
        const heading = panel.querySelector("h2");

        gsap.fromTo(
          heading,
          {
            x: 700,
          },
          {
            x: -700,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: ScrollTrigger.getAll()[0]?.animation,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-black">
      <div
        ref={containerRef}
        className="flex h-screen gap-[-1px]"
        style={{ width: `${slides.length * 50}vw` }}
      >
        {project.amenities.map((amenity, index) => (
          <div
            key={index}
            className={`panel relative flex h-screen w-screen shrink-0 items-center justify-center overflow-hidden bg-background`}
          >
            <h2 className="pointer-events-none absolute text-[10vw] font-bold uppercase text-[#8b1b1c] z-10 ">
              {amenity.name}
            </h2>

            <div className="relative  h-[60vh] w-[40vw]  min-w-60 rounded-xl bg-white shadow-2xl">
              <Image
                src={amenity.image}
                alt={amenity.name}
                fill
                className="object-cover rounded-xl "
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-[10%] left-10 md:left-20 font-gotu text-xl md:text-4xl font-bold">
        <AnimatedHeading
          text={"Featured Amenities"}
          tag="h1"
          delay={0.6}
          duration={1.2}
          className="font-tabular  text-xl md:text-4xl font-bold"
        />
      </div>
    </section>
  );
}
