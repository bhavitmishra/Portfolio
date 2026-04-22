import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

export interface Project {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  href: string;
}

const PROJECTS: Project[] = [
  {
    num: "01 / 04",
    title: "PassX",
    desc: "A ticketing and events platform built for the Indian market — handling payments, inventory, and distributor flows at scale.",
    tags: ["Next.js", "Node.js", "Easebuzz", "Redis", "BullMQ", "React Native"],
    href: "https://www.business.passx.in",
  },
  {
    num: "02 / 04",
    title: "ProfitEye",
    desc: "A product profit tracker for small sellers — real-time margin calculations, sale history, and cost analysis in a clean dashboard.",
    tags: ["React", "Hono", "Cloudflare Workers", "Prisma"],
    href: "https://profiteye.bhavit.xyz",
  },
  {
    num: "03 / 04",
    title: "Vrinmo",
    desc: "A UPI-style payments web app built as a Turborepo monorepo — shared auth, real-time balance, and clean transaction flows.",
    tags: ["Turborepo", "Next.js", "TypeScript", "PostgreSQL"],
    href: "https://vrinmo-userapp.bhavit.xyz",
  },
  {
    num: "04 / 04",
    title: "Medium Clone",
    desc: "A full-featured blogging platform — rich text editor, user auth, article feeds, and SEO-friendly server-rendered pages.",
    tags: ["React", "Hono", "Cloudflare Workers", "Zod"],
    href: "https://blog.bhavit.xyz",
  },
];

export default function Projects() {
  return (
    <div id="projects">
      <div className="section-header">
        <span className="section-label">Selected work</span>
        <span className="section-count">04 projects</span>
      </div>
      <div className={styles.grid}>
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}
