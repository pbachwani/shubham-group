"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

// const plans = [
//   {
//     id: 1,
//     title: "Plan 1",
//     category: "Plan 1",
//     image: "/images/final-data/aditya-villa/plan/A.svg",
//   },
//   {
//     id: 2,
//     title: "Plan 2",
//     category: "Plan 2",
//     image: "/images/sketch-1.png",
//   },
//   {
//     id: 3,
//     title: "Plan 3",
//     category: "Plan 3",
//     image: "/images/sketch-1.png",
//   },
//   {
//     id: 4,
//     title: "Plan 4",
//     category: "Plan 4",
//     image: "/images/sketch-1.png",
//   },
// ];

const filters = ["All", "Plan 1", "Plan 2", "Plan 3", "Plan 4"];

export default function FloorPlans({ project }) {
  const plans = project.plan;

  const filters = useMemo(() => {
    return ["All", ...new Set(plans.map((plan) => plan.category))];
  }, [plans]);

  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const filteredPlans = useMemo(() => {
    if (activeFilter === "All") return plans;

    return plans.filter((plan) => plan.category === activeFilter);
  }, [plans, activeFilter]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedPlan(null);
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedPlan ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPlan]);

  return (
    <section className="py-24">
      <div className="mx-auto px-4 md:px-20">
        {/* Heading */}

        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <h2 className="text-4xl font-light">Floor Plans</h2>

          <a
            href={project?.brochure}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-sm border-b border-black pb-1 hover:opacity-60 transition hover:text-accent"
          >
            Download Full Brochure
          </a>
        </div>

        <div className="mt-16 grid lg:grid-cols-[220px_1fr] gap-12">
          {/* Filters */}

          <aside>
            {/* Mobile */}

            <div className="flex lg:hidden gap-3 overflow-x-scroll pb-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`whitespace-nowrap rounded-full border px-5 py-2 transition
                  ${
                    activeFilter === filter ? "bg-black text-white" : "bg-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Desktop */}

            <div className="hidden lg:flex sticky top-28 flex-col gap-6">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-left transition
                    ${
                      activeFilter === filter
                        ? "font-semibold"
                        : "opacity-50 hover:opacity-100"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </aside>

          {/* Grid */}

          <div className="grid sm:grid-cols-2 gap-6">
            {filteredPlans.map((plan) => (
              <motion.button
                key={plan.id}
                layoutId={`plan-${plan.id}`}
                onClick={() => setSelectedPlan(plan)}
                className="group overflow-hidden rounded-md bg-none cursor-pointer"
              >
                <div className="relative aspect-4/3">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    className="object-fit transition duration-500 group-hover:scale-90"
                  />
                </div>

                <div className="flex items-center justify-between px-5 py-4">
                  <p>{plan.title}</p>

                  <p className="text-xs opacity-50">Click to Expand</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen */}

      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            className="fixed inset-0 z-100 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlan(null)}
          >
            <motion.div
              layoutId={`plan-${selectedPlan.id}`}
              className="relative w-full h-full md:max-w-7xl aspect-16/10 rounded-lg overflow-hidden bg-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedPlan.image}
                alt={selectedPlan.title}
                fill
                className="object-contain p-5"
              />

              <button
                onClick={() => setSelectedPlan(null)}
                className="absolute right-5 top-5 h-10 w-10 rounded-full bg-black text-white"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
