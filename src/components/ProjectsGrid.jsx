"use client";
import React from "react";
import ProjectCard from "./ui/ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Shubh City",
    description:
      "Shubh City offers well-planned, spacious homes in Jaipur with modern comforts, premium amenities, and a vibrant community where living meets elevated family lifestyle.",
    image: "/images/shubh-city/Main entry gate 01.jpg",
  },
  {
    id: 2,
    title: "Palm Studio",
    description:
      "Palm Studio by Shubham Group brings modern studio apartments in Jaipur with smart design, stylish comfort, and amenities like a gym, pool, and mini theater crafted for today's lifestyle.",
    image: "/images/palm-studio/plam-studio1.jpg",
  },
  {
    id: 3,
    title: "Aditya Villa",
    description:
      "Aditya Villa offers stylish villas in Jaipur, combining modern design with comfort. Enjoy serene surroundings and amenities for a truly elevated living experience.",
    image: "/images/aditya-villa/ADITYA VILLA  VIEW010.jpg",
  },
  {
    id: 4,
    title: "Shubh Villa",
    description:
      "Shubh Villa offers elegant, spacious villas in Jaipur with modern layouts, premium amenities, and a lifestyle of comfort and luxury.",
    image: "/images/shubh-villa/2.jpg",
  },
  {
    id: 5,
    title: "Shubh Villa",
    description:
      "Shubh Villa offers elegant, spacious villas in Jaipur with modern layouts, premium amenities, and a lifestyle of comfort and luxury.",
    image: "/images/projects/shubh-villa.jpg",
  },
  {
    id: 6,
    title: "Shubh Villa",
    description:
      "Shubh Villa offers elegant, spacious villas in Jaipur with modern layouts, premium amenities, and a lifestyle of comfort and luxury.",
    image: "/images/projects/shubh-villa.jpg",
  },
  {
    id: 7,
    title: "Shubh Villa",
    description:
      "Shubh Villa offers elegant, spacious villas in Jaipur with modern layouts, premium amenities, and a lifestyle of comfort and luxury.",
    image: "/images/projects/shubh-villa.jpg",
  },
];

const ProjectsGrid = () => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-6 pb-4">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            href="/about"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
