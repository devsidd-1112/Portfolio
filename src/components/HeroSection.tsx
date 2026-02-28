import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Animated grid */}
    <div className="absolute inset-0 animated-grid opacity-40" />

    {/* Gradient orbs */}
    <div className="gradient-blur top-1/4 -left-40 opacity-30" />
    <div className="gradient-blur bottom-1/4 -right-40 opacity-20" />

    <div className="container relative mx-auto px-6 py-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-xs font-medium text-muted-foreground tracking-wide uppercase">
          Available for opportunities
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
      >
        <span className="text-gradient">Full-Stack Developer</span>
        <br />
        <span className="text-gradient-primary">& AI Systems Engineer</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10"
      >
        I architect and build production-grade systems with Java, Spring Boot, and modern AI.
        <br className="hidden sm:block" />
        From intelligent APIs to offline mobile AI — I ship what matters.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <Button asChild variant="hero" size="lg">
          <Link to="/projects">
            View Projects <ArrowRight size={16} />
          </Link>
        </Button>
        <Button asChild variant="hero-outline" size="lg">
          <a href="#" download>
            <Download size={16} /> Resume
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
