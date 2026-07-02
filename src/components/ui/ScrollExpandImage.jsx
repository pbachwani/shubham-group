"use client";
import React, { useState, useEffect, useRef } from "react";

export default function ScrollExpandImage() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the container has been scrolled through
      // 0 means it just entered the viewport, 1 means it fills the screen
      const totalScrollableDistance = rect.height - windowHeight;
      const scrolledDistance = -rect.top;

      if (totalScrollableDistance <= 0) return;

      const progress = Math.min(
        Math.max(scrolledDistance / totalScrollableDistance, 0),
        1,
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Map progress (0 to 1) to styling values
  const width = 50 + scrollProgress * 50; // Starts at 50vw, expands to 100vw
  const height = 60 + scrollProgress * 40; // Starts at 60vh, expands to 100vh
  const borderRadius = 24 * (1 - scrollProgress); // Starts at 24px, shrinks to 0px

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Intro Spacer Content */}
      <div className="h-screen flex flex-col justify-center items-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Scroll Down to See the Magic
        </h1>
        <p className="mt-4 text-slate-400 text-lg">
          The image below will scale seamlessly.
        </p>
      </div>

      {/* Animation Track Container */}
      {/* h-[200vh] controls how long the user has to scroll to finish the animation */}
      <div ref={containerRef} className="relative h-[200vh] w-full">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <div
            className="overflow-hidden shadow-2xl transition-all duration-75 ease-out"
            style={{
              width: `${width}vw`,
              height: `${height}vh`,
              borderRadius: `${borderRadius}px`,
            }}
          >
            <img
              src="/images/palm-studio/plam-studio1.jpg"
              alt="Expanding landscape"
              className="w-full h-full object-cover object-center scale-105"
            />
          </div>
        </div>
      </div>

      {/* Outro Spacer Content */}
      <div className="h-screen flex justify-center items-center bg-black">
        <h2 className="text-3xl font-semibold">
          Content continuous after full screen...
        </h2>
      </div>
    </div>
  );
}
