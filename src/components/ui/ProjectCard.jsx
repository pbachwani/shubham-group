"use client";
import React from "react";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";

const ProjectCard = ({ cover, title, description, href = "/about" }) => {
  return (
    <Link href={href}>
      <div className="flex flex-col gap-4 shadow-lg shadow-[#621C1D]/30 rounded-sm overflow-hidden cursor-pointer shrink-0 md:w-90 w-80 h-full group">
        {/* Image Container */}
        <div className="relative w-full aspect-5/3 overflow-hidden bg-gray-200 shrink-0">
          <img
            src={cover}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
          />
          {/* Arrow CTA */}
          <div className="absolute bottom-4 right-4 bg-[#621C1D] text-[#EA7726] p-2 transition-colors">
            <ChevronsRight size={20} />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 p-4 flex-1 min-h-80">
          {/* Description - grows to fill available space */}
          <p className="text-justify leading-relaxed flex-1">{description}</p>

          {/* Title - stays at bottom */}
          <h3 className="text-2xl shrink-0 font-tabular font-semibold">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
