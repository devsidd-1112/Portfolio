import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (y - 0.5) * 8, y: (x - 0.5) * -8 });
    setGlowPos({ x: x * 100, y: y * 100 });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
    setGlowPos({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      onMouseMove={handleMouse}
      onMouseLeave={resetTilt}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group relative block rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30 hover:elevated-shadow"
      >
        {/* Spotlight glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, hsl(230 85% 62% / 0.12), transparent 60%)`,
          }}
        />

        {/* Gradient border top */}
        <div className="h-[1px] w-full" style={{ background: "linear-gradient(90deg, transparent, hsl(230 85% 62% / 0.3), hsl(270 80% 60% / 0.3), transparent)" }} />

        <div className="relative p-6 sm:p-8">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-gradient-accent transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight
              size={18}
              className="text-muted-foreground opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:text-primary"
            />
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
