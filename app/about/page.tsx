import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import SkillBar from "@/components/SkillBar";
import Timeline from "@/components/Timeline";
import { EDUCATION, EXPERIENCE, SKILLS } from "@/lib/data";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="py-16">
      <PageHeading title="about" />

      {/* Bio */}
      <div className="max-w-2xl space-y-5 leading-relaxed text-fg">
        <p>
          I am a junior full-stack developer who enjoys the whole path of a
          feature, from the database table to the button someone clicks. I
          started with small HTML pages, then moved to React and Node because I
          wanted to build things that remember what you did.
        </p>
        <p className="text-dim">
          Right now I am focused on TypeScript, clean API design and interfaces
          that feel quick on slow connections. I learn best by shipping, so most
          of what I know comes from projects I broke and then fixed.
        </p>
      </div>

      {/* Skills */}
      <div className="mt-20">
        <h2 className="mb-8 text-xl font-bold text-white">
          <span className="text-accent">#</span> skills
        </h2>
        <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
          {SKILLS.map((s) => (
            <SkillBar key={s.name} name={s.name} level={s.level} />
          ))}
        </div>
      </div>

      {/* Education and experience */}
      <div className="mt-20 grid gap-16 lg:grid-cols-2">
        <div>
          <h2 className="mb-8 text-xl font-bold text-white">
            <span className="text-accent">#</span> education
          </h2>
          <Timeline entries={EDUCATION} />
        </div>
        <div>
          <h2 className="mb-8 text-xl font-bold text-white">
            <span className="text-accent">#</span> experience
          </h2>
          <Timeline entries={EXPERIENCE} />
        </div>
      </div>
    </section>
  );
}
