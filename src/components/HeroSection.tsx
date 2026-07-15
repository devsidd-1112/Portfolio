import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Typewriter from "@/components/animations/Typewriter";
import MagneticButton from "@/components/animations/MagneticButton";
import FloatingOrbs from "@/components/animations/FloatingOrbs";

const ParticleScene = lazy(() => import("@/components/3d/ParticleScene"));

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
    {/* Layers */}
    <div className="absolute inset-0 animated-grid opacity-30" />
    <FloatingOrbs />
    <Suspense fallback={null}>
      <ParticleScene />
    </Suspense>

    {/* Moving beam */}
    <div className="absolute top-1/3 left-0 right-0 h-px overflow-hidden opacity-40">
      <div className="h-full w-1/3 animate-beam-move" style={{ background: "linear-gradient(90deg, transparent, hsl(230 85% 62% / 0.5), transparent)" }} />
    </div>

    <div className="container relative mx-auto px-6 py-32 text-center" style={{ zIndex: 2 }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-xs font-medium text-muted-foreground tracking-widest uppercase">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-teal mr-2 animate-pulse-glow" />
          Available for opportunities
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold tracking-tight leading-[1.1] sm:leading-[1.05] mb-6 px-4"
      >
        <span className="text-gradient block mb-2">Hello there, I'm Siddarth</span>
        <Typewriter
          phrases={[
            "Full Stack Developer",
            "AI Builder",
            "Backend Engineer",
          ]}
          typingSpeed={45}
          deletingSpeed={20}
          pause={1800}
          loop={true}
          cursor={true}
          className="text-gradient-accent"
        />
      </motion.h1>

      {/* Glow underline */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mx-auto mb-8 h-[2px] w-48 origin-center"
        style={{ background: "var(--gradient-primary)" }}
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 px-4"
      >
        Building scalable systems and intelligent applications with modern tech.
        <br className="hidden sm:block" />
        Computer Science student focused on full-stack development and AI integration.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 px-4"
      >
        <MagneticButton>
          <Button asChild variant="hero" size="lg">
            <Link to="/projects">
              View Projects <ArrowRight size={16} />
            </Link>
          </Button>
        </MagneticButton>
        <MagneticButton>
          <Button asChild variant="hero-outline" size="lg">
            <a href="mailto:siddarth2k5@gmail.com">
              <Download size={16} /> Contact Me
            </a>
          </Button>
        </MagneticButton>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
