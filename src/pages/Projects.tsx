import { useState, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import { projects, getCategories } from "@/lib/projects";

const ParticleScene = lazy(() => import("@/components/3d/ParticleScene"));

const Projects = () => {
  const categories = ["All", ...getCategories()];
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category.includes(active));

  return (
    <main className="relative pt-28 pb-24 overflow-hidden">
      <FloatingOrbs />
      <div className="absolute inset-0 animated-grid opacity-20" />
      <Suspense fallback={null}>
        <ParticleScene />
      </Suspense>

      <div className="container relative mx-auto px-6" style={{ zIndex: 2 }}>
        <AnimatedSection>
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-4 block">My Work</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-4">Projects</h1>
          <p className="text-muted-foreground max-w-lg mb-12">
            Systems I&apos;ve designed and built — from microservices platforms to AI-powered applications.
          </p>
        </AnimatedSection>

        <AnimatedSection className="flex flex-wrap gap-2 mb-14">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary glow-blue"
                  : "bg-secondary text-secondary-foreground border-border hover:border-primary/30"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Projects;
