import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { getProject } from "@/lib/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProject(slug || "");

  if (!project) {
    return (
      <main className="pt-28 pb-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Project not found</h1>
          <Button asChild variant="hero-outline">
            <Link to="/projects">
              <ArrowLeft size={16} /> Back to Projects
            </Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-28 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Projects
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold text-gradient mb-3">{project.title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{project.tagline}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-12">
            {project.techStack.map((tech) => (
              <span key={tech} className="text-xs font-medium px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground">
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 mb-16">
            {project.github && (
              <Button asChild variant="hero-outline" size="default">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github size={16} /> GitHub
                </a>
              </Button>
            )}
            {project.demo && (
              <Button asChild variant="hero" size="default">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} /> Live Demo
                </a>
              </Button>
            )}
          </div>
        </motion.div>

        {/* Sections */}
        <div className="space-y-12">
          <AnimatedSection>
            <h2 className="text-xl font-semibold text-foreground mb-3">Problem Statement</h2>
            <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-semibold text-foreground mb-3">Architecture</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{project.architecture}</p>
            <div className="rounded-2xl border border-border bg-secondary/30 flex items-center justify-center h-48 text-muted-foreground text-sm">
              Architecture Diagram Placeholder
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-semibold text-foreground mb-3">Key Challenges</h2>
            <ul className="space-y-3">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {c}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-semibold text-foreground mb-3">How It Works</h2>
            <p className="text-muted-foreground leading-relaxed">{project.howItWorks}</p>
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
