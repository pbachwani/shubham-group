import { projects } from "@/app/constants/data";

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}

export default async function ProjectDetail({ params }) {
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId);

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
    <main className="w-full h-svh">
      <section className="w-full h-full flex flex-col items-center justify-center gap-4">
        <h1>{project.name}</h1>
        <p>{project.description}</p>
      </section>
    </main>
  );
}
