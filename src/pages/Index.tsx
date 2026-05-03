import { Suspense, lazy } from "react";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import SkillsSection from "@/components/sections/SkillsSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import { projects } from "@/lib/projects";

const ParticleScene = lazy(() => import("@/components/3d/ParticleScene"));

const Index = () => {
  const featured = projects.filter((p) => p.featured);

  return (
    <main className="relative">
      <HeroSection />

      {/* Global 3D Particle Background */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <Suspense fallback={null}>
          <ParticleScene />
        </Suspense>
      </div>

      {/* Featured Projects */}
      <section className="relative py-20 sm:py-28 md:py-36 overflow-hidden">
        <FloatingOrbs />
        <div className="container relative mx-auto px-6" style={{ zIndex: 2 }}>
          <AnimatedSection className="mb-12 sm:mb-16 md:mb-20">
            <span className="text-xs font-medium tracking-widest uppercase text-primary mb-4 block">Portfolio</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4">Featured Projects</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-lg">
              Scalable systems, AI-powered applications, and mobile platforms built with modern tech stacks.
            </p>
          </AnimatedSection>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="glow-line mx-auto w-2/3" />

      <SkillsSection />

      <div className="glow-line mx-auto w-2/3" />

      <ArchitectureSection />

      <CTASection />
    </main>
  );
};

export default Index;
