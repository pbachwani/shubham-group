"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionHeading({ texts = [] }) {
  const containerRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    if (!containerRef.current || texts.length === 0) return;

    textRefs.current.forEach((textElement, index) => {
      if (!textElement) return;

      const isLeftAligned = index % 2 === 0; // 0, 2, 4... are left
      const marginProperty = isLeftAligned ? "marginLeft" : "marginRight";

      gsap.to(textElement, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "top top",
          scrub: 1,
          markers: false,
        },
        [marginProperty]: 80,
        ease: "power2.out",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [texts]);

  if (texts.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="relative w-screen left-[calc(-50vw+50%)] pb-12  overflow-hidden"
    >
      <div className="space-y-4 md:space-y-6 lg:space-y-8">
        {texts.map((text, index) => {
          const isLeftAligned = index % 2 === 0;

          return (
            <div key={index} className="flex">
              <h2
                ref={(el) => {
                  if (el) textRefs.current[index] = el;
                }}
                className={`text-3xl lg:text-6xl font-bold text-white transition-all px-6 md:px-12 lg:px-20 mix-blend-difference ease-out uppercase ${
                  isLeftAligned ? "text-left" : "ml-auto text-right"
                }`}
              >
                {text}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
