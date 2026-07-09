// "use client";

// import { useState } from "react";
// import Image from "next/image";

// const features = [
//   {
//     id: "thoughtful-architecture",
//     title: "Thoughtful Architecture",
//     align: "left",
//     paragraph:
//       "Each project is crafted with innovation and practicality, ensuring homes that blend style with everyday convenience.",
//   },
//   {
//     id: "strong-communities",
//     title: "Strong Communities",
//     align: "right",
//     paragraph:
//       "Spaces are designed to bring neighbors together, fostering a genuine sense of belonging beyond the walls of a home.",
//   },
//   {
//     id: "lifestyle-enhancements",
//     title: "Lifestyle Enhancements",
//     align: "left",
//     paragraph:
//       "Thoughtful amenities and shared spaces are woven into every development to elevate daily living for residents.",
//   },
//   {
//     id: "trust-transparency",
//     title: "Trust & Transparency",
//     align: "right",
//     paragraph:
//       "Every commitment is backed by clear communication and honest dealings, built on decades of relationships.",
//   },
//   {
//     id: "prime-connectivity",
//     title: "Prime Connectivity",
//     align: "left",
//     paragraph:
//       "Locations are chosen for their access to key hubs, keeping residents effortlessly connected to the city.",
//   },
//   {
//     id: "homes-with-purpose",
//     title: "Homes with Purpose",
//     align: "right",
//     paragraph:
//       "Every home is designed with intent, balancing form and function to serve the way people actually live.",
//   },
// ];

// function LayerIcon({ active }) {
//   return (
//     <svg
//       width="20"
//       height="20"
//       viewBox="0 0 24 24"
//       fill="none"
//       className={`shrink-0 transition-colors duration-300 ${
//         active ? "text-orange-600" : "text-orange-500"
//       }`}
//     >
//       <path
//         d="M12 2L2 7l10 5 10-5-10-5z"
//         stroke="currentColor"
//         strokeWidth="1.4"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M2 12l10 5 10-5"
//         stroke="currentColor"
//         strokeWidth="1.4"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M2 17l10 5 10-5"
//         stroke="currentColor"
//         strokeWidth="1.4"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// export default function WhyChooseShubham() {
//   const [hovered, setHovered] = useState(null);

//   const left = features.filter((f) => f.align === "left");
//   const right = features.filter((f) => f.align === "right");

//   const handleEnter = (id) => setHovered(id);
//   const handleLeave = () => setHovered(null);

//   return (
//     <section className="relative w-full min-h-svh overflow-hidden px-4 py-20 lg:px-20">
//       {/* Background city illustration */}
//       <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center bg-blue-400/0 h-auto w-full">
//         <Image
//           src="/images/city-bg2.png"
//           alt=""
//           width={900}
//           height={900}
//           className="h-auto w-[90%] opacity-50 select-none"
//           priority
//         />
//       </div>

//       <div className="relative z-10 flex h-full min-h-[calc(100svh-7rem)] flex-col">
//         <h1 className="font-tabular font-semibold text-4xl tracking-tight md:text-5xl">
//           Why Choose Shubham Group
//         </h1>

//         {/* Paragraph columns, gap in the middle lets the skyline show */}
//         <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-10 text-sm leading-relaxed text-justify md:mt-20 md:grid-cols-2 md:gap-x-40">
//           <div className="flex flex-col gap-10">
//             {left.map((f) => (
//               <p
//                 key={f.id}
//                 className={`md:max-w-sm transition-colors duration-300 ${
//                   hovered === f.id ? "text-neutral-800" : "text-neutral-400"
//                 }`}
//               >
//                 {f.paragraph}
//               </p>
//             ))}
//           </div>
//           <div className="flex flex-col gap-10">
//             {right.map((f) => (
//               <p
//                 key={f.id}
//                 className={`md:max-w-sm md:ml-auto transition-colors duration-300 ${
//                   hovered === f.id ? "text-neutral-800" : "text-neutral-400"
//                 }`}
//               >
//                 {f.paragraph}
//               </p>
//             ))}
//           </div>
//         </div>

//         {/* Spacer pushes feature list to the bottom, like the reference */}
//         <div className="flex-1" />

//         {/* Feature list */}
//         <div className="mb-10 grid grid-cols-1 gap-y-8 md:mt-0 md:grid-cols-2 md:gap-x-40">
//           <div className="flex flex-col gap-8">
//             {left.map((f) => (
//               <div
//                 key={f.id}
//                 onMouseEnter={() => handleEnter(f.id)}
//                 onMouseLeave={handleLeave}
//                 onClick={() =>
//                   setHovered((prev) => (prev === f.id ? null : f.id))
//                 }
//                 className="flex w-fit cursor-pointer items-center gap-3"
//               >
//                 <LayerIcon active={hovered === f.id} />
//                 <span
//                   className={`text-base font-semibold transition-colors duration-300 md:text-lg ${
//                     hovered === f.id ? "text-orange-600" : "text-neutral-900"
//                   }`}
//                 >
//                   {f.title}
//                 </span>
//               </div>
//             ))}
//           </div>
//           <div className="flex flex-col gap-8 md:items-end">
//             {right.map((f) => (
//               <div
//                 key={f.id}
//                 onMouseEnter={() => handleEnter(f.id)}
//                 onMouseLeave={handleLeave}
//                 onClick={() =>
//                   setHovered((prev) => (prev === f.id ? null : f.id))
//                 }
//                 className="flex w-fit cursor-pointer items-center gap-3"
//               >
//                 <LayerIcon active={hovered === f.id} />
//                 <span
//                   className={`text-base font-semibold transition-colors duration-300 md:text-lg ${
//                     hovered === f.id ? "text-orange-600" : "text-neutral-900"
//                   }`}
//                 >
//                   {f.title}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const features = [
  {
    id: "thoughtful-architecture",
    title: "Thoughtful Architecture",
    align: "left",
    paragraph:
      "Each project is crafted with innovation and practicality, ensuring homes that blend style with everyday convenience.",
  },
  {
    id: "strong-communities",
    title: "Strong Communities",
    align: "right",
    paragraph:
      "Spaces are designed to bring neighbors together, fostering a genuine sense of belonging beyond the walls of a home.",
  },
  {
    id: "lifestyle-enhancements",
    title: "Lifestyle Enhancements",
    align: "left",
    paragraph:
      "Thoughtful amenities and shared spaces are woven into every development to elevate daily living for residents.",
  },
  {
    id: "trust-transparency",
    title: "Trust & Transparency",
    align: "right",
    paragraph:
      "Every commitment is backed by clear communication and honest dealings, built on decades of relationships.",
  },
  {
    id: "prime-connectivity",
    title: "Prime Connectivity",
    align: "left",
    paragraph:
      "Locations are chosen for their access to key hubs, keeping residents effortlessly connected to the city.",
  },
  {
    id: "homes-with-purpose",
    title: "Homes with Purpose",
    align: "right",
    paragraph:
      "Every home is designed with intent, balancing form and function to serve the way people actually live.",
  },
];

const LOOP_INTERVAL = 2500;

function LayerIcon({ active }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className={`shrink-0 transition-colors duration-300 ${
        active ? "text-orange-600" : "text-orange-500"
      }`}
    >
      <path
        d="M12 2L2 7l10 5 10-5-10-5z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M2 12l10 5 10-5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M2 17l10 5 10-5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className={`shrink-0 transition-transform duration-300 ${
        open ? "rotate-180" : "rotate-0"
      }`}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhyChooseShubham() {
  const [hovered, setHovered] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [openMobileId, setOpenMobileId] = useState(null);
  const indexRef = useRef(0);

  const left = features.filter((f) => f.align === "left");
  const right = features.filter((f) => f.align === "right");

  // Desktop auto-loop
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % features.length;
      setHovered(features[indexRef.current].id);
    }, LOOP_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Initialize first highlight on mount
  useEffect(() => {
    setHovered(features[0].id);
  }, []);

  const handleEnter = (id, index) => {
    setIsPaused(true);
    indexRef.current = index;
    setHovered(id);
  };

  const handleLeave = () => {
    setIsPaused(false);
  };

  const toggleMobile = (id) => {
    setOpenMobileId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full lg:min-h-svh h-[80vh] overflow-hidden px-4 py-20 lg:px-20">
      {/* Background city illustration */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center bg-blue-400/0 h-auto w-full">
        <Image
          src="/images/city-bg2.png"
          alt=""
          width={900}
          height={900}
          className="h-auto w-[90%] opacity-50 select-none"
          priority
        />
      </div>

      <div className="relative z-10 flex h-full lg:min-h-[calc(100svh-10rem)] flex-col justify-end lg:justify-between">
        <h1 className="font-tabular font-semibold text-4xl tracking-tight md:text-5xl">
          Why Choose Shubham Group
        </h1>

        {/* ---------- DESKTOP LAYOUT ---------- */}
        <div className="hidden lg:flex  md:flex-1 md:flex-col">
          {/* Paragraph columns, gap in the middle lets the skyline show */}
          <div className="mt-20 grid grid-cols-2 gap-x-40 text-sm leading-relaxed text-justify">
            <div className="flex flex-col gap-10">
              {left.map((f) => (
                <p
                  key={f.id}
                  className={`max-w-sm transition-all ease-out font-bold duration-300 ${
                    hovered === f.id ? "text-black" : "text-black/40"
                  }`}
                >
                  {f.paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-10">
              {right.map((f) => (
                <p
                  key={f.id}
                  className={`ml-auto max-w-sm transition-all ease-out font-bold duration-300 ${
                    hovered === f.id ? "text-black" : "text-black/40"
                  }`}
                >
                  {f.paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Spacer pushes feature list to the bottom, like the reference */}
          <div className="flex-1" />

          {/* Feature list - 3 columns, paired top/bottom */}
          <div className="mb-10 grid grid-cols-3 gap-x-16 w-full place-items-center">
            {[0, 1, 2].map((colIndex) => {
              const pair = features.slice(colIndex * 2, colIndex * 2 + 2);
              return (
                <div key={colIndex} className="flex flex-col gap-8">
                  {pair.map((f) => {
                    const globalIndex = features.findIndex(
                      (x) => x.id === f.id,
                    );
                    return (
                      <div
                        key={f.id}
                        onMouseEnter={() => handleEnter(f.id, globalIndex)}
                        onMouseLeave={handleLeave}
                        className="flex w-fit cursor-pointer items-center gap-3"
                      >
                        <LayerIcon active={hovered === f.id} />
                        <span
                          className={`text-lg font-bold transition-colors duration-300 ease-out md:text-xl ${
                            hovered === f.id
                              ? "text-orange-600"
                              : "text-neutral-900"
                          }`}
                        >
                          {f.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------- MOBILE FAQ ACCORDION ---------- */}
        <div className="mt-12 flex flex-col lg:hidden">
          {features.map((f) => {
            const isOpen = openMobileId === f.id;
            return (
              <div
                onClick={() => toggleMobile(f.id)}
                key={f.id}
                className="border-b border-neutral-300/60 py-5"
              >
                <button className="flex w-full items-center justify-between gap-3 text-left">
                  <span className="flex items-center gap-3">
                    <LayerIcon active={isOpen} />
                    <span
                      className={`text-base font-semibold transition-colors duration-300 ${
                        isOpen ? "text-orange-600" : "text-neutral-900"
                      }`}
                    >
                      {f.title}
                    </span>
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-3"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-neutral-500">
                      {f.paragraph}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
