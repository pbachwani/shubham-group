import { projects } from "@/app/constants/data";
import FloorPlans from "@/components/FloorPlans.jsx";
import BroctureButton from "@/components/ui/BroctureButton";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import ImageMarqueeScroll from "@/components/ui/ImageMarqueeScroll";
import ProjectHero from "@/components/ui/ProjectHero";

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}

export default async function ProjectDetail({ params }) {
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId);
  console.log(project.amenities[0]);

  if (!project)
    return (
      <main className="w-full h-svh">
        <section>
          <h1>Project Not Found</h1>
          <p>The project you are looking for does not exist.</p>
        </section>
      </main>
    );

  return (
    <main className="w-full relative">
      <BroctureButton project={project} />
      <ProjectHero project={project} />
      <section className="w-full h-full flex flex-col items-center justify-center ">
        <span className="text-xl md:text-4xl text-accent font-gotu font-bold opacity-40 animate-pulse py-10 text-left w-full px-4 md:px-20 md:pt-20">
          Luxury Crafted for Modern Families
        </span>
        <ImageMarqueeScroll
          baseVelocity={2}
          height={620}
          images={project.images}
        />
      </section>

      {/* <section className="w-full h-full flex flex-col items-center py-20 justify-center">
        <div className="flex flex-col gap-4 w-full">
          {project.amenities.map((amenity, i) => (
            <div key={i}>
              <p className="text-black text-4xl">{amenity.name}</p>;
            </div>
          ))}
        </div>
      </section> */}
      <HorizontalScroll project={project} />

      <FloorPlans project={project} />
    </main>
  );
}
