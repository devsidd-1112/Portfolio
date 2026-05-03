import { Suspense, lazy } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import { motion } from "framer-motion";

const ParticleScene = lazy(() => import("@/components/3d/ParticleScene"));

const timeline = [
  {
    period: "Jul 2025",
    title: "Full Stack Development Intern – Cognitech",
    description:
      "Built dynamic web interfaces and backend features in a structured development environment. Worked on responsive UI components and collaborated on real-world development workflows in Coimbatore.",
  },
  {
    period: "2025",
    title: "Amazon ML Summer School & Intel Gen AI Hackathon",
    description:
      "Selected for Amazon ML Summer School 2025. Participated in Intel Gen AI Hackathon, exploring AI applications and machine learning techniques.",
  },
  {
    period: "2024",
    title: "AI & Mobile Development Projects",
    description:
      "Developed AI Developer Copilot with semantic search and LLM-powered insights. Built UniEat campus food ordering app with real-time group ordering and payment integration using React Native and Firebase.",
  },
  {
    period: "2023",
    title: "Started Computer Science Engineering",
    description:
      "Began B.E. in Computer Science at SSN College of Engineering, Chennai. Built strong foundations in programming, data structures, algorithms, and full-stack development with Java and Spring Boot.",
  },
];

const About = () => (
  <main className="relative pt-28 pb-24 overflow-hidden">
    <FloatingOrbs />
    <div className="absolute inset-0 animated-grid opacity-20" />
    <Suspense fallback={null}>
      <ParticleScene />
    </Suspense>

    <div className="container relative mx-auto px-6 max-w-3xl" style={{ zIndex: 2 }}>
      <AnimatedSection>
        <span className="text-xs font-medium tracking-widest uppercase text-primary mb-4 block">About Me</span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-8">Siddarth P</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          I&apos;m a Computer Science Engineering student at SSN College of Engineering with strong foundations in programming, data structures, and problem-solving. I focus on building scalable full-stack systems and integrating AI to solve real-world problems.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          From distributed microservices platforms to AI-powered developer tools and mobile applications, I design systems that are scalable, efficient, and user-centered. I thrive at the intersection of backend engineering, AI integration, and thoughtful system architecture.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-16">
          Currently exploring advanced topics in machine learning, generative AI, and cloud-native architectures while building production-ready applications.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-2xl font-bold text-foreground mb-12">Journey</h2>
      </AnimatedSection>

      <div className="relative pl-8">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px]" style={{ background: "linear-gradient(180deg, hsl(230 85% 62% / 0.4), hsl(270 80% 60% / 0.2), transparent)" }} />

        <div className="space-y-14">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-[33px] top-1.5">
                <div className="w-3 h-3 rounded-full bg-primary border-[3px] border-background" />
                <div className="absolute inset-0 rounded-full bg-primary/30 animate-pulse-glow" />
              </div>

              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                {item.period}
              </span>
              <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </main>
);

export default About;
