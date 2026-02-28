import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const timeline = [
  {
    period: "Present",
    title: "Full-Stack Developer & AI Engineer",
    description:
      "Building production-grade AI systems with Java, Spring Boot, and modern frontend frameworks. Focused on intelligent automation and accessibility.",
  },
  {
    period: "2024",
    title: "AI Systems & Mobile Development",
    description:
      "Developed ThunaiVizhi-AI — an offline AI assistant using TensorFlow Lite and Flutter. Explored on-device ML for underserved communities.",
  },
  {
    period: "2023",
    title: "Enterprise Java & Cloud Architecture",
    description:
      "Deep-dived into microservices with Spring Boot, containerized deployments with Docker, and cloud-native architecture patterns.",
  },
  {
    period: "2022",
    title: "Foundations in Computer Science",
    description:
      "Built strong fundamentals in data structures, algorithms, system design, and object-oriented programming with Java.",
  },
];

const About = () => (
  <main className="pt-28 pb-24">
    <div className="container mx-auto px-6 max-w-3xl">
      <AnimatedSection>
        <h1 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">About Me</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          I&apos;m a Full-Stack Java Developer with a deep focus on building AI-powered, production-grade systems. I believe software should solve real problems — and I approach every project with an architecture-first mindset.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-16">
          From intelligent APIs to offline mobile AI assistants, I design systems that are scalable, secure, and human-centered. I thrive at the intersection of backend engineering, AI integration, and thoughtful system design.
        </p>
      </AnimatedSection>

      {/* Timeline */}
      <AnimatedSection>
        <h2 className="text-2xl font-bold text-foreground mb-10">Journey</h2>
      </AnimatedSection>

      <div className="relative border-l border-border pl-8 space-y-12">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[41px] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              {item.period}
            </span>
            <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </main>
);

export default About;
