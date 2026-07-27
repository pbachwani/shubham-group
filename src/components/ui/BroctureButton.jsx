import React from "react";

const BroctureButton = ({ project }) => {
  return (
    <div className="fixed w-fit h-fit bottom-4 left-8 px-4 py-2 rounded-xl bg-black/30 backdrop-blur-lg shadow-md text-nowrap text-accent z-50 cursor-pointer">
      <a
        href={project?.brochure}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-sm md:text-base cursor-pointer"
      >
        Download Brocture
      </a>
    </div>
  );
};

export default BroctureButton;
