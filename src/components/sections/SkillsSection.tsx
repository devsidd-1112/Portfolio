import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Code2, Server, Smartphone, Database, Brain, Container,
  GitBranch, Globe, Cpu, Layers, Cloud, Lock, Zap,
} from "lucide-react";

const techs = [
  { name: "Java", icon: Code2, color: "hsl(10 80% 55%)" },
  { name: "Python", icon: Code2, color: "hsl(210 80% 60%)" },
  { name: "C++", icon: Code2, color: "hsl(210 70% 55%)" },
  { name: "TypeScript", icon: Code2, color: "hsl(210 80% 60%)" },
  { name: "React", icon: Globe, color: "hsl(200 90% 60%)" },
  { name: "React Native", icon: Smartphone, color: "hsl(200 100% 60%)" },
  { name: "Flutter", icon: Smartphone, color: "hsl(200 100% 60%)" },
  { name: "Node.js", icon: Server, color: "hsl(140 60% 50%)" },
  { name: "Spring Boot", icon: Server, color: "hsl(140 60% 50%)" },
  { name: "PostgreSQL", icon: Database, color: "hsl(210 70% 55%)" },
  { name: "MongoDB", icon: Database, color: "hsl(140 60% 45%)" },
  { name: "Firebase", icon: Database, color: "hsl(30 90% 55%)" },
  { name: "Machine Learning", icon: Brain, color: "hsl(270 80% 60%)" },
  { name: "LLMs", icon: Cpu, color: "hsl(270 80% 60%)" },
  { name: "TensorFlow", icon: Brain, color: "hsl(30 90% 55%)" },
  { name: "Docker", icon: Container, color: "hsl(205 80% 55%)" },
  { name: "Kubernetes", icon: Container, color: "hsl(210 80% 55%)" },
  { name: "Kafka", icon: Layers, color: "hsl(0 0% 80%)" },
  { name: "Redis", icon: Zap, color: "hsl(0 80% 55%)" },
  { name: "OAuth 2.0", icon: Lock, color: "hsl(230 85% 62%)" },
  { name: "Gemini API", icon: Cpu, color: "hsl(270 80% 60%)" },
  { name: "Git", icon: GitBranch, color: "hsl(10 80% 55%)" },
];

const SkillsSection = () => (
  <section className="relative py-28 sm:py-36 overflow-hidden">
    {/* Background accent */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

    <div className="container relative mx-auto px-6">
      <AnimatedSection className="text-center mb-20">
        <span className="text-xs font-medium tracking-widest uppercase text-primary mb-4 block">Technologies</span>
        <h2 className="text-3xl sm:text-5xl font-bold text-gradient mb-4">Tech Stack</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Tools and technologies I use to build scalable systems.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
        {techs.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -6, scale: 1.04 }}
            className="group relative flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30"
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at 50% 30%, ${tech.color.replace(")", " / 0.12)")}, transparent 70%)`,
              }}
            />
            <tech.icon size={28} style={{ color: tech.color }} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
            <span className="relative z-10 text-sm font-medium text-foreground">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
