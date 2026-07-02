"use client";
import { motion } from "motion/react";
import AnimatedHeading from "./AnimatedHeading";

const craftItems = [
  {
    title: "Engineering",
    description:
      "Every home that we make, comes with a stamp of Shubham Group. And to achieve this, we have dedicated an in-house team of highly skilled engineers and technicians. From laying the foundation and formwork to adding finesse at every step, everything we build holds true to our promise.",
  },
  {
    title: "Material Sourcing",
    description:
      "At Shubham Group, we strive to give you the best in the world. For that reason, we take account of bringing together the best materials from across the globe. In addition to this, our in-house manufacturing helps us achieve the highest quality standards at an optimal cost, ensuring accelerated turnover.",
  },
  {
    title: "Quality Control",
    description:
      "Quality surpasses everything and anything for us at Shubham Group, to the extent that we have an autonomous quality control cell reporting directly to the Group Chairman.",
  },
];

export default function Craft() {
  return (
    <section className="bg-[#191919] relative">
      <div className="sticky top-0 bg-[#191919] overflow-hidden">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/images/jaipur-bg.png"
          alt="Jaipur background"
          className="w-screen h-auto object-cover opacity-20"
        />
      </div>
      <div className="text-white w-full py-20 md:px-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20 py-20 relative">
          {/* Left sticky content */}
          <div className="lg:col-span-2 w-full lg:sticky lg:top-1/2 lg:-translate-y-1/2 h-fit">
            <div className="flex flex-col gap-10">
              {/* <h2 className="text-4xl md:text-6xl font-semibold font-tabular text-white">
                Committed to Our Craft
              </h2> */}
              <AnimatedHeading
                text={"Committed to Our Craft"}
                tag="h2"
                delay={0.5}
                className="text-4xl md:text-6xl font-semibold font-tabular text-white"
              />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                className="text-lg md:text-xl leading-relaxed"
              >
                Our reputation precedes us, as being purveyors of the most
                exclusive luxury living experiences in the region. Each property
                is exquisitely crafted so as to leave an indelible impression
                that doesn&apos;t merely reflect international building
                standards but defines them.
              </motion.p>
            </div>
          </div>

          {/* Right content - mapped items */}
          <div className="lg:col-span-1 flex flex-col gap-16 md:gap-20">
            {craftItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex flex-col gap-6 bg-white/5 backdrop-blur-lg rounded-xl p-5"
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-[#EA7726]">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg text-white/80 leading-relaxed text-justify">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
