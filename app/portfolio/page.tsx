import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/data";

export const metadata: Metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  return (
    <section className="py-16">
      <PageHeading title="portfolio">
        Six things I built while learning the full stack. Each one has the code
        on GitHub and a live version to click around in.
      </PageHeading>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
