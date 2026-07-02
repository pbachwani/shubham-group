// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SectionHeading from "./ui/SectionHeading";
// import { motion } from "motion/react";

// gsap.registerPlugin(ScrollTrigger);

// const features = [
//   {
//     id: 1,
//     title: "Trusted Legacy",
//     description:
//       "With over 15 years of experience, Shubham Group has earned the trust of countless families by delivering homes that combine quality, affordability, and luxury.",
//   },
//   {
//     id: 2,
//     title: "Affordable Luxury",
//     description:
//       "Every project is designed to make premium living accessible, offering world-class amenities at prices that suit your budget.",
//   },
//   {
//     id: 3,
//     title: "Community Living",
//     description:
//       "Our projects are thoughtfully planned with open spaces, parks, and green zones that foster healthy social living.",
//   },
//   {
//     id: 4,
//     title: "Expert Teamwork",
//     description:
//       "Driven by skilled architects, engineers, and professionals, each project reflects dedication, precision, and attention to detail.",
//   },
// ];

// export default function Trust() {
//   const containerRef = useRef(null);

//   return (
//     <section ref={containerRef} className="relative w-full min-h-screen">
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black -z-10">
//         <img
//           src="/images/homepage/couple-sitting-together.png"
//           alt=""
//           className="w-full h-full object-cover opacity-40"
//         />
//       </div>

//       {/* Content */}
//       <div className="z-10 w-full min-h-screen h-full py-20 px-6 md:px-12 lg:px-20 flex flex-col gap-20">
//         {/* Main Heading */}
//         <div className="flex flex-col gap-2">
//           <h1 className="font-tabular text-4xl text-white">
//             Where Trust Meets Lifestyle
//           </h1>
//           <div className="h-px w-full bg-white" />
//         </div>

//         <motion.div className="ml-auto">
//           {/* Features Grid */}
//           <div className="flex gap-20">
//             {features.map((feature, index) => (
//               <div
//                 key={feature.id}
//                 className="group relative p-6 rounded-lg backdrop-blur-sm bg-black/30 hover:bg-black/40 transition-all duration-500 cursor-pointer w-80 aspect-square"
//               >
//                 {/* heading */}
//                 <div className="flex items-center gap-3 mb-4">
//                   <h3 className="text-xl md:text-2xl font-semibold text-white text-nowrap">
//                     {feature.title}
//                   </h3>
//                   {/* Geometric Icon */}
//                   <svg
//                     className="w-6 h-6 text-orange-500 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-6"
//                     />
//                   </svg>
//                 </div>
//                 {/* Description */}
//                 <p className="text-sm md:text-base text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300 text-justify">
//                   {feature.description}
//                 </p>

//                 {/* Subtle Gradient Border on Hover */}
//                 <div
//                   className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, rgba(255, 165, 0, 0.2) 0%, transparent 100%)",
//                   }}
//                 />
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    title: "Trusted Legacy",
    description:
      "With over 15 years of experience, Shubham Group has earned the trust of countless families by delivering homes that combine quality, affordability, and luxury.",
  },
  {
    id: 2,
    title: "Affordable Luxury",
    description:
      "Every project is designed to make premium living accessible, offering world-class amenities at prices that suit your budget.",
  },
  {
    id: 3,
    title: "Community Living",
    description:
      "Our projects are thoughtfully planned with open spaces, parks, and green zones that foster healthy social living.",
  },
  {
    id: 4,
    title: "Expert Teamwork",
    description:
      "Driven by skilled architects, engineers, and professionals, each project reflects dedication, precision, and attention to detail.",
  },
];

export default function Trust() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    gsap.fromTo(
      cardsRef.current,
      {
        x: "100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "center 60%",
          scrub: 1, // smooth scrubbing (1 = 1 second lag)
          markers: false,
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black -z-10">
        <img
          src="/images/homepage/couple-sitting-together.png"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="z-10 w-full min-h-screen h-full py-20 px-6 md:px-12 lg:px-20 flex flex-col gap-20">
        {/* Main Heading */}
        <div className="flex flex-col gap-2">
          <h1 className="font-tabular text-4xl text-white font-semibold">
            Where Trust Meets Lifestyle
          </h1>
          <div className="h-px w-full bg-white/40" />
        </div>

        {/* Cards Container */}
        <motion.div
          ref={cardsRef}
          className="ml-auto"
          initial={{ x: 500, opacity: 0 }}
        >
          <div className="flex flex-wrap gap-20">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="group relative p-6 rounded-lg backdrop-blur-sm bg-black/30 hover:bg-black/80 transition-all duration-500 cursor-pointer w-60 md:w-80 aspect-square shrink-0"
              >
                {/* heading */}
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white text-nowrap">
                    {feature.title}
                  </h3>
                  {/* Geometric Icon */}
                  <svg
                    className="w-6 h-6 text-orange-500 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-6"
                    />
                  </svg>
                </div>
                {/* Description */}
                <p className="text-sm md:text-base text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300 text-justify">
                  {feature.description}
                </p>

                {/* Subtle Gradient Border on Hover */}
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(234, 119, 38, 0.3) 0%, transparent 100%)",
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
