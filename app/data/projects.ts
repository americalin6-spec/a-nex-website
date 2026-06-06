import { caseStudies, featuredCaseStudies } from "./case-studies";
import type { LocalizedText } from "./case-studies";

/** @deprecated Use caseStudies — kept for card components */
export type Project = {
  id: string;
  category: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  tags: string[];
  featured?: boolean;
  layout?: "wide" | "tall" | "standard";
};

export const projects: Project[] = caseStudies.map((c, i) => ({
  id: c.id,
  category: c.category,
  title: c.title,
  description: c.summary,
  tags: c.techTags.slice(0, 4),
  featured: i < 5,
  layout: i === 0 || i === 4 ? "wide" : i === 1 ? "tall" : "standard",
}));

export const featuredProjects = projects.filter((p) => p.featured);
export const workProjects = projects;

export { caseStudies, featuredCaseStudies };
