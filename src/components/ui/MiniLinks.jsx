"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  {
    label: "Phone",
    href: "tel:+917427876297",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/9530006158",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/shubhamgroupjaipur/",
  },
  {
    label: "Email",
    href: "mailto:info@shubhamgroup.com",
  },
];
export default function MiniLink() {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHide(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-8 z-50 transition-opacity duration-500 ease-out ${hide ? "opacity-0" : "opacity-100"}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 flex flex-col gap-2"
          >
            {links.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 15 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: index * 0.04,
                  },
                }}
                exit={{ opacity: 0, x: 15 }}
                className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((prev) => !prev)}
        className="flex px-4 py-2 items-center justify-center rounded-full bg-black/30 backdrop-blur-lg font-bold text-accent shadow-md text-nowrap text-sm md:text-base"
      >
        Inquire Now
      </motion.button>
    </div>
  );
}
