import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import MagneticButton from "@/components/animations/MagneticButton";
import { getProject } from "@/lib/projects";

const StatCounter = ({ label, value }: { label: string; value: string }) => (
  <div className="text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="text-3xl sm:text-4xl font-bold text-gradient-accent mb-1"
    >
      {value}
    </motion.div>
    <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
  </div>
);

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProject(slug || "");

  if (!project) {
    return (
      <main className="pt-28 pb-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Project not found</h1>
          <Button asChild variant="hero-outline">
            <Link to="/projects"><ArrowLeft size={16} /> Back to Projects</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="relative pt-28 pb-24 overflow-hidden">
      <FloatingOrbs />
      <div className="absolute inset-0 animated-grid opacity-15" />

      <div className="container relative mx-auto px-6 max-w-4xl" style={{ zIndex: 2 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft size={14} /> Back to Projects
          </Link>

          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-4 block">Case Study</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{project.tagline}</p>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.techStack.map((tech) => (
              <span key={tech} className="text-xs font-medium px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground border border-border">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3 mb-16">
            {project.github && (
              <MagneticButton>
                <Button asChild variant="hero-outline" size="default">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} /> GitHub
                  </a>
                </Button>
              </MagneticButton>
            )}
            {project.demo && (
              <MagneticButton>
                <Button asChild variant="hero" size="default">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </Button>
              </MagneticButton>
            )}
          </div>
        </motion.div>

        {/* Stats */}
        <AnimatedSection className="mb-20">
          <div className="grid grid-cols-3 gap-6 p-8 rounded-2xl border border-border bg-card">
            <StatCounter value={`${project.techStack.length}+`} label="Technologies" />
            <StatCounter value={`${project.challenges.length}`} label="Challenges Solved" />
            <StatCounter value="100%" label="Production Ready" />
          </div>
        </AnimatedSection>

        <div className="space-y-16">
          <AnimatedSection>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-primary" /> Problem Statement
            </h2>
            <p className="text-muted-foreground leading-relaxed pl-11">{project.problem}</p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-accent" /> Architecture
            </h2>
            <p className="text-muted-foreground leading-relaxed pl-11 mb-8">{project.architecture}</p>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-[1px] w-full" style={{ background: "linear-gradient(90deg, transparent, hsl(230 85% 62% / 0.3), transparent)" }} />
              <div className="flex items-center justify-center h-56 text-muted-foreground text-sm">
                Architecture Diagram
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-neon-teal" /> Key Challenges
            </h2>
            <ul className="space-y-4 pl-11">
              {project.challenges.map((c, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-3 text-muted-foreground text-sm"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/60" />
                  {c}
                </motion.li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-neon-pink" /> How It Works
            </h2>
            <p className="text-muted-foreground leading-relaxed pl-11">{project.howItWorks}</p>
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
