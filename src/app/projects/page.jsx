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
        {/* <div className="sticky h-30 top-0 w-full z-50 bg-background" /> */}
        <div className="flex flex-col gap-4 lg:px-10 xl:px-20 px-4 mt-32">
          {projects.map((project, i) => (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              className="w-full max-lg:h-full h-100 min-h-100 flex flex-col lg:flex-row justify-between items-center rounded-sm shadow-xl group transition-all duration-300 ease-out overflow-hidden"
            >
              {/* Image left */}
              <div className="lg:w-3/5 h-full bg-green-300/0 overflow-hidden rounded-sm">
                {project.image && (
                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:block transition-all duration-300 ease-out hover:scale-105"
                  />
                )}
              </div>

              {/* Content Right */}
              <div className="max-lg:py-10 h-full lg:w-2/5 w-full flex flex-col items-start justify-start px-4 py-4">
                {/* top right project index */}
                <p
                  className={`flex justify-end items-center text-end w-full font-light`}
                >
                  {/* P <MoveLeft className="px-2 w-10" />  */}
                  <span className="font-bold text-2xl pr-1">
                    {i + 1}{" "}
                  </span> / {totalProjects}
                </p>

                {/* Name and Location */}
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl font-bold">{project.name}</h1>
                  <div className="flex items-center gap-2">
                    <MapPin color="#8B1B1C" /> {project.location}
                  </div>
                </div>

                <div className="flex flex-col justify-end items-start h-full">
                  <p className="">{project.description}</p>
                  <h3 className="font-extralight py-2 text-[#8B1B1C] mt-4">
                    Featured amenities
                  </h3>
                  <div className="flex flex-wrap justify-start space-x-4">
                    {project.amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="border-r-2 last:border-none pr-4 border-[#8B1B1C]"
                      >
                        <span className="">{amenity}</span>
                      </div>
                    ))}
                  </div>
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
