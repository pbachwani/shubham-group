import React from "react";
import { projects } from "../constants/data";
import Link from "next/link";

const Projects = () => {
  return (
    <main className="w-full min-h-svh h-full ">
      {/* projects section */}
      <section className="w-full h-full relative">
        <div className="sticky h-30 bg-background top-0 w-full z-50" />
        <div className="flex flex-col gap-2 md:px-20 px-4">
          {projects.map((project) => (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              className="w-full max-lg:h-full  h-120 min-h-120 flex flex-col lg:flex-row justify-between items-center border-2  group transition-all duration-300 ease-out"
            >
              <div className="lg:w-3/5 h-full bg-green-300">
                {project.image && (
                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-full object-cover opacity-50   group-hover:block transition-all duration-300 ease-out"
                  />
                )}
              </div>
              <div className="max-lg:py-20 h-full lg:w-2/5 w-full flex flex-col items-center justify-between">
                {project.name}
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* why choose us */}
      <section className="w-full h-svh">Why Choose Us</section>
    </main>
  );
};

export default Projects;
