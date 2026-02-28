import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import TechStackGrid from "@/components/TechStackGrid";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/lib/projects";

const Index = () => {
  const featured = projects.filter((p) => p.featured);

  return (
    <main>
      <HeroSection />

      {/* Featured Projects */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-lg">
              Selected work showcasing full-stack development and AI integration.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <TechStackGrid />
      <CTASection />
    </main>
  );
};

export default Index;
