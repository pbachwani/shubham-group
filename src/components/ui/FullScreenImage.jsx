// "use client";
// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const FullScreenImage = ({ src, alt = "" }) => {
//   const imageContainerRef = useRef();
//   const imgRef = useRef();

//   useEffect(() => {
//     const imageContainer = imageContainerRef.current;
//     const img = imgRef.current;

//     if (!imageContainer || !img) return;

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: imageContainer,
//         start: "top 80%",
//         end: "80% top",
//         scrub: 1,
//         // pin: true,
//         // pinSpacing: true,
//         markers: true,
//       },
//     });

//     // Animate image width from 60% to 100%
//     tl.to(
//       img,
//       {
//         borderRadius: "0px",
//         width: "100%",
//         height: "100%",
//       },
//       0,
//     );
//     tl.to(
//       img,
//       {
//         opacity: 0,
//       },
//       1,
//     );

//     // Cleanup
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div
//       ref={imageContainerRef}
//       className="absolute top-0 w-fit flex justify-center items-center z-20"
//       style={{ transformOrigin: "center center" }}
//     >
//       <img
//         ref={imgRef}
//         src={src}
//         alt={alt}
//         className="w-3/5 h-fit object-contain rounded-xl"
//       />
//     </div>
//   );
// };

// export default FullScreenImage;

"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AnimatedHeading from "./AnimatedHeading";

gsap.registerPlugin(ScrollTrigger);

const FullScreenImage = ({ src, alt = "" }) => {
  const imageContainerRef = useRef();
  const imgRef = useRef();
  const textRef = useRef();

  const isMobile = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768; // Adjust the breakpoint as needed
    }
    return false;
  };

  useEffect(() => {
    const imageContainer = imageContainerRef.current;
    const img = imgRef.current;
    const text = textRef.current;

    if (!imageContainer || !img) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageContainer,
        start: isMobile ? "top 70%" : "top 30%",
        end: "80% top",
        scrub: 1,
        // pin: true,
        // pinSpacing: true,
        // markers: true,
      },
    });

    // Text appears right at the start of the trigger
    if (text) {
      tl.fromTo(
        text,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        0,
      );
    }

    // Animate image width from 60% to 100%
    tl.to(
      img,
      {
        borderRadius: "0px",
        width: "100%",
        height: "100%",
      },
      0,
    );
    tl.to(
      img,
      {
        opacity: 0,
      },
      1,
    );

    // Fade the text out together with the image
    if (text) {
      tl.to(
        text,
        {
          opacity: 0,
        },
        1,
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={imageContainerRef}
      className="absolute top-0 w-fit flex justify-center items-center z-20"
      style={{ transformOrigin: "center center" }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-3/5 h-fit object-contain rounded-xl"
      />

      <div
        ref={textRef}
        className="absolute top-[8%] left-0 w-full flex justify-center px-4 z-30 pointer-events-none"
      >
        {/* <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center font-tabular">
          Luxury You Desire
        </h2> */}

        <AnimatedHeading
          text={"Luxury You Desire"}
          tag="h1"
          delay={0.6}
          className="text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center font-tabular md:space-x-20"
        />
      </div>
    </div>
  );
};

export default FullScreenImage;
