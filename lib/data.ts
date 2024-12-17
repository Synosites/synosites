import { ProjectType } from "./types";

export const projects: ProjectType[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Stripe integration",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: "2",
    title: "Portfolio Website",
    description: "A minimalist portfolio website for a creative agency",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    technologies: ["React", "Three.js", "GSAP", "Tailwind CSS"],
    liveUrl: "https://example.com",
  },
  {
    id: "3",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    technologies: ["Next.js", "Prisma", "tRPC", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
];