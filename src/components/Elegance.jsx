"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import FullScreenImage from "./ui/FullScreenImage";
import ProjectsGrid from "./ProjectsGrid";

gsap.registerPlugin(ScrollTrigger);

const Elegance = () => {
  const titleRef = useRef();
  const paragraphRef = useRef();
  const contentRef = useRef();
  const projectsRef = useRef();

  useEffect(() => {
    const title = titleRef.current;
    const paragraph = paragraphRef.current;
    const content = contentRef.current;
    const projects = projectsRef.current;

    if (!title || !paragraph || !content) return;
    gsap.set(paragraph, {
      opacity: 0,
    });
    gsap.set(projects, {
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: content,
        start: "top 90%",
        end: "center 60%",
        scrub: 1,
        markers: false,
      },
    });

    tl.to(title, {
      opacity: 1,
      scale: 1,
    });

    // Paragraph: fade in during second half of scroll
    tl.to(paragraph, {
      opacity: 1,
    });
    tl.to(projects, {
      opacity: 1,
      ease: "power2.out",
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full h-[150svh] lg:h-[200svh] relative overflow-hidden flex flex-col justify-center items-start">
      {/* Full screen image component */}
      <FullScreenImage
        src="/images/palm-studio/plam-studio1.jpg"
        alt="Palm Studio"
      />

      {/* content that comes underneath */}
      <div
        ref={contentRef}
        className="w-full flex flex-col gap-10 p-4 md:p-20 sticky top-1/2"
      >
        <h2
          ref={titleRef}
          className="font-tabular font-semibold text-2xl md:text-[40px] opacity-0 mix-blend-difference"
        >
          Designed for Elegance
        </h2>
        <p
          ref={paragraphRef}
          className="text-lg md:text-xl md:max-w-2/3 opacity-0 will-change-auto"
        >
          Crafted with sophistication and style, our homes combine modern
          layouts with premium finishes a perfect blend of comfort and timeless
          elegance.
        </p>

        <div className="w-full" ref={projectsRef}>
          <ProjectsGrid />
        </div>
      </div>
    </section>
  );
};

export default Elegance;
