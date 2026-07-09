"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function AnimatedHeading({
  text,
  className = "",
  tag = "h1",
  stagger = 0.05,
  duration = 0.6,
  delay = 0.2,
}) {
  const ref = useRef(null);
  const Tag = tag;

  useEffect(() => {
    if (!ref.current) return;

    // Create SplitText instance
    const splitText = new SplitText(ref.current, {
      type: "words",
    });

    // Animate the words
    gsap.from(
      splitText.words,
      {
        opacity: 0,
        y: "100%",
        duration: duration,
        ease: "power3.out",
        stagger: stagger,
        delay: delay,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          //   once: true,
        },
        yoyo: true,
      },
      //   {
      //     opacity: 1,
      //     y: 0,
      //   },
    );

    // Cleanup
    return () => {
      splitText.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [stagger]);

  return (
    <Tag ref={ref} className={className}>
      {text}
    </Tag>
  );
}
