import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import {
  Code2,
  Server,
  Smartphone,
  Database,
  Brain,
  Container,
  GitBranch,
  Globe,
  Cpu,
  Layers,
} from "lucide-react";

const techs = [
  { name: "Java", icon: Code2 },
  { name: "Spring Boot", icon: Server },
  { name: "React", icon: Globe },
  { name: "Next.js", icon: Layers },
  { name: "PostgreSQL", icon: Database },
  { name: "Flutter", icon: Smartphone },
  { name: "TensorFlow Lite", icon: Brain },
  { name: "Gemini API", icon: Cpu },
  { name: "Docker", icon: Container },
  { name: "Git", icon: GitBranch },
];

const TechStackGrid = () => (
  <section className="py-24 sm:py-32">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">Tech Stack</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          The tools and technologies I use to build production systems.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {techs.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
          >
            <tech.icon size={28} className="text-primary" />
            <span className="text-sm font-medium text-foreground">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackGrid;
