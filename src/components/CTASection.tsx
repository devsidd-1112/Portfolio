import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/animations/MagneticButton";

const CTASection = () => (
  <section className="relative py-28 sm:py-36">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <div className="relative rounded-3xl border border-border bg-card overflow-hidden noise">
          {/* Gradient background */}
          <div className="absolute inset-0" style={{ background: "var(--gradient-bg)" }} />

          {/* Grid */}
          <div className="absolute inset-0 animated-grid opacity-30" />

          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-30" style={{ background: "radial-gradient(ellipse, hsl(230 85% 62% / 0.3), transparent 70%)", filter: "blur(60px)" }} />

          <div className="relative p-12 sm:p-20 text-center" style={{ zIndex: 2 }}>
            <span className="text-xs font-medium tracking-widest uppercase text-primary mb-6 block">Let's Connect</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gradient mb-4">
              Let&apos;s build something great
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-10">
              Open to full-time roles, freelance projects, and collaborations on AI-powered systems.
            </p>
            <MagneticButton className="inline-block">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Get in Touch <ArrowRight size={16} />
                </Link>
              </Button>
            </MagneticButton>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
