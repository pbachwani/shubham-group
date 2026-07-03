// import Image from "next/image";

// const features = [
//   { title: "Thoughtful Architecture", align: "left" },
//   { title: "Strong Communities", align: "right" },
//   { title: "Lifestyle Enhancements", align: "left" },
//   { title: "Trust & Transparency", align: "right" },
//   { title: "Prime Connectivity", align: "left" },
//   { title: "Homes with Purpose", align: "right" },
// ];

// const paragraph =
//   "Each project is crafted with innovation and practicality, ensuring homes that blend style with everyday convenience.";

// function LayerIcon() {
//   return (
//     <svg
//       width="20"
//       height="20"
//       viewBox="0 0 24 24"
//       fill="none"
//       className="text-orange-500 shrink-0"
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
//   const left = features.filter((f) => f.align === "left");
//   const right = features.filter((f) => f.align === "right");

//   return (
//     <section className="relative w-full min-h-svh overflow-hidden px-4 py-20 md:px-20">
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
//         <h1 className="font-serif text-4xl italic tracking-tight text-neutral-800 md:text-6xl">
//           Why Choose Shubham Group
//         </h1>

//         {/* Paragraph columns, gap in the middle lets the skyline show */}
//         <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-10 text-sm leading-relaxed text-neutral-400 text-justify md:mt-20 md:grid-cols-2 md:gap-x-40">
//           <div className="flex flex-col gap-10">
//             {Array.from({ length: 3 }).map((_, i) => (
//               <p key={`l-${i}`} className="md:max-w-sm">
//                 {paragraph}
//               </p>
//             ))}
//           </div>
//           <div className="flex flex-col gap-10">
//             {Array.from({ length: 3 }).map((_, i) => (
//               <p key={`r-${i}`} className="md:max-w-sm md:ml-auto">
//                 {paragraph}
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
//               <div key={f.title} className="flex items-center gap-3">
//                 <LayerIcon />
//                 <span className="text-base font-semibold md:text-lg">
//                   {f.title}
//                 </span>
//               </div>
//             ))}
//           </div>
//           <div className="flex flex-col gap-8 md:items-end">
//             {right.map((f) => (
//               <div key={f.title} className="flex items-center gap-3">
//                 <LayerIcon />
//                 <span className="text-base font-semibold md:text-lg">
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

import { useState } from "react";
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

export default function WhyChooseShubham() {
  const [hovered, setHovered] = useState(null);

  const left = features.filter((f) => f.align === "left");
  const right = features.filter((f) => f.align === "right");

  const handleEnter = (id) => setHovered(id);
  const handleLeave = () => setHovered(null);

  return (
    <section className="relative w-full min-h-svh overflow-hidden px-4 py-20 md:px-20">
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

      <div className="relative z-10 flex h-full min-h-[calc(100svh-7rem)] flex-col">
        <h1 className="font-tabular font-semibold text-4xl tracking-tight md:text-6xl">
          Why Choose Shubham Group
        </h1>

        {/* Paragraph columns, gap in the middle lets the skyline show */}
        <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-10 text-sm leading-relaxed text-justify md:mt-20 md:grid-cols-2 md:gap-x-40">
          <div className="flex flex-col gap-10">
            {left.map((f) => (
              <p
                key={f.id}
                className={`md:max-w-sm transition-colors duration-300 ${
                  hovered === f.id ? "text-neutral-800" : "text-neutral-400"
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
                className={`md:max-w-sm md:ml-auto transition-colors duration-300 ${
                  hovered === f.id ? "text-neutral-800" : "text-neutral-400"
                }`}
              >
                {f.paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Spacer pushes feature list to the bottom, like the reference */}
        <div className="flex-1" />

        {/* Feature list */}
        <div className="mb-10 grid grid-cols-1 gap-y-8 md:mt-0 md:grid-cols-2 md:gap-x-40">
          <div className="flex flex-col gap-8">
            {left.map((f) => (
              <div
                key={f.id}
                onMouseEnter={() => handleEnter(f.id)}
                onMouseLeave={handleLeave}
                onClick={() =>
                  setHovered((prev) => (prev === f.id ? null : f.id))
                }
                className="flex w-fit cursor-pointer items-center gap-3"
              >
                <LayerIcon active={hovered === f.id} />
                <span
                  className={`text-base font-semibold transition-colors duration-300 md:text-lg ${
                    hovered === f.id ? "text-orange-600" : "text-neutral-900"
                  }`}
                >
                  {f.title}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8 md:items-end">
            {right.map((f) => (
              <div
                key={f.id}
                onMouseEnter={() => handleEnter(f.id)}
                onMouseLeave={handleLeave}
                onClick={() =>
                  setHovered((prev) => (prev === f.id ? null : f.id))
                }
                className="flex w-fit cursor-pointer items-center gap-3"
              >
                <LayerIcon active={hovered === f.id} />
                <span
                  className={`text-base font-semibold transition-colors duration-300 md:text-lg ${
                    hovered === f.id ? "text-orange-600" : "text-neutral-900"
                  }`}
                >
                  {f.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
