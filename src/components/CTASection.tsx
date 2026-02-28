import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const CTASection = () => (
  <section className="py-24 sm:py-32">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <div className="relative rounded-3xl border border-border bg-card p-12 sm:p-16 text-center overflow-hidden">
          <div className="gradient-blur top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
              Let&apos;s build something great
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              I&apos;m open to full-time roles, freelance projects, and collaborations on AI-powered systems.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Get in Touch <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
