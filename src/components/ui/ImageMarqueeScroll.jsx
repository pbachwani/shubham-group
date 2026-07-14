// "use client";

// import { useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useSpring,
//   useTransform,
//   useVelocity,
//   useAnimationFrame,
//   useMotionValue,
// } from "motion/react";
// import { wrap } from "@motionone/utils";

// export default function ImageMarqueeScroll({
//   images = [],
//   baseVelocity = 10,
//   height = 120,
// }) {
//   const baseX = useMotionValue(0);

//   const { scrollY } = useScroll();
//   const scrollVelocity = useVelocity(scrollY);

//   const smoothVelocity = useSpring(scrollVelocity, {
//     damping: 50,
//     stiffness: 400,
//   });

//   const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
//     clamp: false,
//   });

//   const directionFactor = useRef(1);

//   useAnimationFrame((_, delta) => {
//     let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

//     if (velocityFactor.get() < 0) {
//       directionFactor.current = -1;
//     } else if (velocityFactor.get() > 0) {
//       directionFactor.current = 1;
//     }

//     moveBy += directionFactor.current * moveBy * velocityFactor.get();
//     baseX.set(baseX.get() + moveBy);
//   });

//   const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

//   return (
//     <div className="overflow-hidden w-full">
//       <motion.div className="flex gap-0" style={{ x }} drag>
//         {[...images, ...images].map((src, i) => (
//           <motion.img
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.6,
//               delay: i * 0.04, // 👈 stagger delay
//               ease: "easeOut",
//             }}
//             key={i}
//             src={src}
//             alt=""
//             style={{ height }}
//             className="shrink-0 object-contain p-2.5"
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// }

"use client";

import { useRef, useState, useLayoutEffect, useCallback } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
  animate,
} from "motion/react";
import { wrap } from "@motionone/utils";

export default function ImageMarqueeScroll({
  images = [],
  baseVelocity = 5,
  height = 120,
  dragFactor = 0.6, // lower = slower drag response. tune to taste
}) {
  const containerRef = useRef(null); // visible viewport
  const trackRef = useRef(null); // exactly ONE image set, for measuring

  const [copies, setCopies] = useState(2);

  // Motion value holding the measured width (px) of a single image set
  const setWidthMV = useMotionValue(0);

  // Automatic scrolling + user drag, both expressed as "% of one set width"
  const autoX = useMotionValue(0);
  const dragX = useMotionValue(0);

  const isDragging = useRef(false);
  const directionFactor = useRef(1);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });

  // Measure single-set width + viewport width, decide how many copies we need
  // so there's always enough duplicated content to cover the visible area.
  const measure = useCallback(() => {
    const setW = trackRef.current?.getBoundingClientRect().width ?? 0;
    const viewportW = containerRef.current?.getBoundingClientRect().width ?? 0;

    if (setW > 0) {
      setWidthMV.set(setW);
      const needed = Math.ceil(viewportW / setW) + 2; // +2 buffer either side
      setCopies((prev) =>
        prev !== Math.max(2, needed) ? Math.max(2, needed) : prev,
      );
    }
  }, [setWidthMV]);

  useLayoutEffect(() => {
    measure();

    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    if (trackRef.current) ro.observe(trackRef.current);

    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure, images]);

  useAnimationFrame((_, delta) => {
    if (isDragging.current) return;

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    autoX.set(autoX.get() + moveBy);
  });

  // Wrap in "% of one set" space (always correct, independent of copy count),
  // then convert to actual pixels using the measured set width.
  const combinedX = useTransform(
    [autoX, dragX, setWidthMV],
    ([auto, drag, setW]) => {
      const pct = wrap(-100, 0, auto + drag);
      return setW ? `${(pct / 100) * setW}px` : "0px";
    },
  );

  return (
    <div ref={containerRef} className="overflow-hidden w-full touch-pan-y">
      <motion.div
        className="flex gap-0 cursor-grab active:cursor-grabbing h-fit"
        style={{ x: combinedX }}
        onPanStart={() => {
          isDragging.current = true;
          dragX.stop();
        }}
        onPan={(_, info) => {
          const setW = setWidthMV.get();
          if (!setW) return;
          const deltaPct = (info.delta.x / setW) * 100 * dragFactor;
          dragX.set(dragX.get() + deltaPct);
        }}
        onPanEnd={(_, info) => {
          isDragging.current = false;

          autoX.set(autoX.get() + dragX.get());
          dragX.set(0);

          const setW = setWidthMV.get();
          const velocityPct = setW
            ? (info.velocity.x / setW) * 100 * dragFactor
            : 0;

          animate(dragX, 0, {
            type: "inertia",
            velocity: velocityPct,
            power: 0.4,
            timeConstant: 350,
          });
        }}
      >
        {/* Reference copy — used only to measure one set's true width */}
        <div ref={trackRef} className="flex shrink-0">
          {images.map((src, i) => (
            <motion.img
              key={`base-${i}`}
              src={src}
              alt=""
              style={{ height }}
              className="shrink-0 object-contain p-2.5 select-none pointer-events-none"
              draggable={false}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.04, ease: "easeOut" }}
            />
          ))}
        </div>

        {/* Extra copies to fill viewport + provide seamless wrap buffer */}
        {Array.from({ length: Math.max(0, copies - 1) }).map((_, c) => (
          <div key={`copy-${c}`} className="flex shrink-0">
            {images.map((src, i) => (
              <img
                key={`copy-${c}-${i}`}
                src={src}
                alt=""
                style={{ height }}
                className="shrink-0 object-contain p-2.5 select-none pointer-events-none"
                draggable={false}
              />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
