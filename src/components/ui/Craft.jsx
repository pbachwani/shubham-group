// "use client";

// import { motion } from "motion/react";
// import AnimatedHeading from "./AnimatedHeading";

// const craftItems = [
//   {
//     title: "Engineering",
//     description:
//       "Every home that we make, comes with a stamp of Shubham Group. And to achieve this, we have dedicated an in-house team of highly skilled engineers and technicians. From laying the foundation and formwork to adding finesse at every step, everything we build holds true to our promise.",
//     image: "/images/engineering.webp",
//   },
//   {
//     title: "Material Sourcing",
//     description:
//       "At Shubham Group, we strive to give you the best in the world. For that reason, we bring together the best materials from across the globe. In addition to this, our in-house manufacturing helps us achieve the highest quality standards at an optimal cost.",
//     image: "/images/Material-Sourcing.webp",
//   },
//   {
//     title: "Quality Control",
//     description:
//       "Quality surpasses everything and anything for us at Shubham Group, to the extent that we have an autonomous quality control cell reporting directly to the Group Chairman.",
//     image: "/images/Quality-Control.webp",
//   },
// ];

// export default function Craft() {
//   return (
//     <section className="py-20 bg-foreground">
//       <div className="mx-auto px-4 lg:px-16 flex flex-col">
//         <div className="flex flex-col justify-between items-start gap-4 py-10 text-white">
//           <AnimatedHeading
//             text={"Committed to Our Craft"}
//             tag="h2"
//             delay={0.2}
//             className="text-4xl md:text-6xl font-semibold font-tabular text-white mb-4"
//           />
//           <p className="text-base md:text-lg text-white/80 leading-relaxed">
//             Our reputation precedes us, as being purveyors of the most exclusive
//             luxury living experiences in the region. Each property is
//             exquisitely crafted so as to leave an indelible impression that
//             doesn&apos;t merely reflect international building standards but
//             defines them.
//           </p>
//         </div>
//         <div className="grid lg:grid-cols-3 gap-6">
//           {craftItems.map((item, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.6,
//                 delay: idx * 0.15,
//               }}
//               viewport={{ once: true }}
//               className="group relative h-140 overflow-hidden rounded-lg bg-background shadow-sm"
//             >
//               {/* Hidden Content */}
//               <div className="absolute inset-0 p-8 flex flex-col justify-end">
//                 {/* <h3 className="text-3xl italic mb-5 text-accent font-tabular">
//                   {item.title}
//                 </h3> */}

//                 <p className="leading-8">{item.description}</p>
//               </div>

//               {/* Sliding Image */}
//               <div className="absolute inset-0 transition-all duration-700 ease-out group-hover:translate-y-[-75%] group-hover:opacity-80">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="h-full w-full object-cover"
//                 />

//                 {/* Gradient */}
//                 <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

//                 {/* Title */}
//                 <h3 className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent text-4xl font-tabular uppercase text-center">
//                   {item.title}
//                 </h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import AnimatedHeading from "./AnimatedHeading";

const craftItems = [
  {
    title: "Engineering",
    description:
      "Every home that we make, comes with a stamp of Shubham Group. And to achieve this, we have dedicated an in-house team of highly skilled engineers and technicians. From laying the foundation and formwork to adding finesse at every step, everything we build holds true to our promise.",
    image: "/images/engineering.webp",
  },
  {
    title: "Material Sourcing",
    description:
      "At Shubham Group, we strive to give you the best in the world. For that reason, we bring together the best materials from across the globe. In addition to this, our in-house manufacturing helps us achieve the highest quality standards at an optimal cost.",
    image: "/images/Material-Sourcing.webp",
  },
  {
    title: "Quality Control",
    description:
      "Quality surpasses everything and anything for us at Shubham Group, to the extent that we have an autonomous quality control cell reporting directly to the Group Chairman.",
    image: "/images/Quality-Control.webp",
  },
];

// Tailwind's `lg` breakpoint — keep this in sync if your config differs
const LG_BREAKPOINT = 1024;

function CraftCard({ item, idx }) {
  const cardRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${LG_BREAKPOINT - 1}px)`);

    const updateIsMobile = () => setIsMobile(mql.matches);
    updateIsMobile();

    mql.addEventListener("change", updateIsMobile);
    return () => mql.removeEventListener("change", updateIsMobile);
  }, []);

  useEffect(() => {
    // Only run the scroll-based trigger below the `lg` breakpoint.
    // Desktop keeps the pure CSS group-hover behavior untouched.
    if (!isMobile) {
      setIsActive(false);
      return;
    }

    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      {
        // Shrinks the trigger zone to a thin band around vertical center
        // of the screen, so only the card currently "in focus" activates.
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: idx * 0.15,
      }}
      viewport={{ once: true }}
      className="group relative h-140 overflow-hidden rounded-lg bg-background shadow-sm"
    >
      {/* Hidden Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <p className="leading-8">{item.description}</p>
      </div>

      {/* Sliding Image */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-out group-hover:translate-y-[-75%] ${
          isActive ? "translate-y-[-75%]" : ""
        }`}
      >
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

        {/* Title */}
        <h3 className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent text-4xl font-tabular uppercase text-center">
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function Craft() {
  return (
    <section className="py-20 bg-foreground">
      <div className="mx-auto px-4 lg:px-16 flex flex-col">
        <div className="flex flex-col justify-between items-start gap-4 py-10 text-white">
          <AnimatedHeading
            text={"Committed to Our Craft"}
            tag="h2"
            delay={0.2}
            className="text-4xl md:text-6xl font-semibold font-tabular text-white mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="text-base md:text-lg leading-relaxed text-justify"
          >
            Our reputation precedes us, as being purveyors of the most exclusive
            luxury living experiences in the region. Each property is
            exquisitely crafted so as to leave an indelible impression that
            doesn&apos;t merely reflect international building standards but
            defines them.
          </motion.p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {craftItems.map((item, idx) => (
            <CraftCard key={idx} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
