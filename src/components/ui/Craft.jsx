"use client";

import { motion } from "motion/react";

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

// Committed to Our Craft - Our reputation precedes us, as being purveyors of the most exclusive luxury living experiences in the region. Each property is exquisitely crafted so as to leave an indelible impression that doesn't merely reflect international building standards but defines them.

export default function Craft() {
  return (
    <section className="py-20 bg-foreground">
      <div className="mx-auto px-4 lg:px-16 flex flex-col">
        <div className="flex justify-between items-center">
          <h2>Committed to Our Craft</h2>
          <p>
            Our reputation precedes us, as being purveyors of the most exclusive
            luxury living experiences in the region. Each property is
            exquisitely crafted so as to leave an indelible impression that
            doesn&apos;t merely reflect international building standards but
            defines them.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {craftItems.map((item, idx) => (
            <motion.div
              key={idx}
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
                {/* <h3 className="text-3xl italic mb-5 text-accent font-tabular">
                  {item.title}
                </h3> */}

                <p className="leading-8">{item.description}</p>
              </div>

              {/* Sliding Image */}
              <div className="absolute inset-0 transition-all duration-700 ease-out group-hover:translate-y-[-80%] group-hover:opacity-80">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

                {/* Title */}
                <h3 className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent text-4xl font-tabular whitespace-nowrap uppercase">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
