"use client";
import { motion } from "motion/react";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { useEffect } from "react";

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

// Committed to Our Craft - Our reputation precedes us, as being purveyors of the most exclusive luxury living experiences in the region. Each property is exquisitely crafted so as to leave an indelible impression that doesn't merely reflect international building standards but defines them.

export default function Founders() {
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);
  return (
    <section className="bg-[#191919] relative">
      <div className="sticky top-0  bg-[#191919] overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-20 py-20 relative">
          {/* Left sticky content */}
          <div className="lg:col-span-2 w-full lg:sticky lg:top-1/2 lg:-translate-y-1/2 h-fit">
            <div className="flex flex-col gap-10">
              {/* <h2 className="text-4xl md:text-6xl font-semibold font-tabular text-white">
                Committed to Our Craft
              </h2> */}
              <AnimatedHeading
                text={"Founders"}
                tag="h2"
                delay={0.5}
                className="text-4xl md:text-6xl font-semibold font-tabular text-white"
              />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                className="text-base md:text-lg leading-relaxed text-justify"
              >
                Shubham Group has grown into a trusted name in Jaipur&apos;s
                real estate scene by focusing on responsible development, modern
                design, and lasting value. Since 2006, the company has
                consistently delivered thoughtfully planned residential projects
                that balance affordability with superior quality. Emphasizing
                transparency, customer satisfaction, and efficient execution,
                Shubham Group combines careful planning and process-driven
                delivery to create comfortable, sustainable communities that
                stand the test of time.
              </motion.p>
            </div>
          </div>

          {/* Right content - mapped items */}
          <div className="lg:col-span-3 flex flex-col gap-16 md:gap-20 text-justify">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col max-lg:items-center lg:flex-row gap-6 bg-white/5 backdrop-blur-lg rounded-xl p-5"
            >
              <img
                src="/images/ashok-sharma.png"
                alt=""
                className="w-1/2 h-auto object-cover"
              />
              <div className="flex flex-col gap-10">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#EA7726]">
                  Ashok Sharma
                </h3>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Shubham Group is guided by a clear, people-first vision.
                  Founded in 2006 by Ashok Sharma, our company is built on over
                  a decade of experience and a commitment to creating
                  affordable, high-quality homes that enhance lifestyles and
                  nurture communities. Under Ashok&apos;s ethical, long-term
                  approach, trust, transparency, and customer satisfaction
                  remain our cornerstones.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col max-lg:items-center lg:flex-row gap-6 bg-white/5 backdrop-blur-lg rounded-xl p-5"
            >
              <img
                src="/images/amit-jivnani.png"
                alt=""
                className="w-1/2 h-auto object-cover"
              />
              <div className="flex flex-col gap-10">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#EA7726]">
                  Amit Jivnani
                </h3>
                <p className="text-base md:text-lg text-white/80 leading-relaxed text-justify">
                  Co-founder Amit Jivnani brings strategic insight and hands-on
                  leadership to project planning and execution. His focus on
                  modern design, functionality, and process excellence ensures
                  every development meets today&apos;s needs while delivering
                  lasting value. Together, Ashok and Amit steer Shubham Group
                  toward responsible growth, thoughtful design, and homes that
                  residents are proud to call their own.
                </p>
              </div>
            </motion.div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* {craftItems.map((item, idx) => (
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
            ))} */
}
