import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Link
      to={`/projects/${project.slug}`}
      className="group block rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:border-primary/30 hover:card-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <ArrowUpRight
          size={18}
          className="text-muted-foreground opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0"
        />
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {project.tagline}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.techStack.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  </motion.div>
);

export default ProjectCard;
