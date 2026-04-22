"use client";

import { useEffect, useRef } from "react";
import type { Project } from "./Projects";
import styles from "./ProjectCard.module.css";

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    width={14}
    height={14}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12h15m0 0l-6-6m6 6l-6 6"
    />
  </svg>
);

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animation = "fadeUp 0.5s ease both";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${styles.card} project-card`}>
      <div className={styles.num}>{project.num}</div>
      <h2 className={styles.title}>{project.title}</h2>
      <p className={styles.desc}>{project.desc}</p>
      <div className={styles.tags}>
        {project.tags.map((t) => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
      <a href={project.href} className={styles.arrow}>
        View project <ArrowIcon />
      </a>
    </div>
  );
}
