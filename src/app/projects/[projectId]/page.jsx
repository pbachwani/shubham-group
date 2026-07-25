import { projects } from "@/app/constants/data";
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
      <div className="fixed w-fit h-fit bottom-4 left-8 px-4 py-2 rounded-xl bg-black/30 backdrop-blur-lg shadow-md text-nowrap text-accent z-50">
        <button className="font-semibold text-sm md:text-base">
          Download Brocture
        </button>
      </div>
      <ProjectHero project={project} />
      <section className="w-full h-full flex flex-col items-center justify-center gap-0">
        <span className="text-sm text-accent font-bold opacity-40 animate-pulse pt-2">
          [drag to see more]
        </span>
        <ImageMarqueeScroll
          baseVelocity={2}
          height={620}
          images={project.images}
        />
      </section>

      <section className="w-full h-full flex flex-col items-center min-h-screen justify-center">
        <div className="flex flex-col gap-4 w-full">
          {project.amenities.map((amenity, i) => (
            <div key={i}>
              <p className="text-black text-4xl">{amenity}</p>;
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
