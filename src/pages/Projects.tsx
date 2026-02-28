import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import { projects, getCategories } from "@/lib/projects";

const Projects = () => {
  const categories = ["All", ...getCategories()];
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category.includes(active));

  return (
    <main className="pt-28 pb-24">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">Projects</h1>
          <p className="text-muted-foreground max-w-lg mb-10">
            A selection of systems I&apos;ve designed and built — from AI-powered apps to enterprise platforms.
          </p>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
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
