import React from "react";
import ProjectCard from "./ui/ProjectCard";
import { projects } from "@/app/constants/data";

const ProjectsGrid = () => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-6 pb-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            cover={project.cover}
            title={project.name}
            description={project.description}
            href={`/projects/${project.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
