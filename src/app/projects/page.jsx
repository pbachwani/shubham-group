import React from "react";
import { projects } from "../constants/data";
import Link from "next/link";
import { MapPin, MoveLeft } from "lucide-react";
import WhyChooseShubham from "@/components/WhyChooseShubham";

const Projects = () => {
  const totalProjects = projects.length;
  return (
    <main className="w-full min-h-svh h-full ">
      {/* projects section */}
      <section className="w-full h-full relative">
        <div className="sticky h-30 top-0 w-full z-50 bg-background" />
        <div className="flex flex-col gap-4 md:px-20 px-4">
          {projects.map((project, i) => (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              className="w-full max-lg:h-full h-120 min-h-120 flex flex-col lg:flex-row justify-between items-center border shadow-2xl group transition-all duration-300 ease-out"
            >
              <div className="lg:w-3/5 h-full bg-green-300/0 overflow-hidden">
                {project.image && (
                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:block transition-all duration-300 ease-out hover:scale-105"
                  />
                )}
              </div>
              <div className="max-lg:py-20 h-full lg:w-2/5 w-full flex flex-col items-start justify-between px-4 md:p-5">
                <p className={`flex`}>
                  P <MoveLeft className="px-2 w-10" /> {i + 1} / {totalProjects}
                </p>
                <div className="flex flex-col gap-4">
                  <h1 className="text-5xl font-bold">{project.name}</h1>
                  <div className="flex items-center gap-2">
                    <MapPin color="#8B1B1C" /> {project.location}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="">
                    <h3 className="font-extralight py-2">Featured amenities</h3>
                    {project.amenities.map((amenity, index) => (
                      <span key={index} className="mr-4">
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <p className="">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <WhyChooseShubham />
    </main>
  );
};

export default Projects;
