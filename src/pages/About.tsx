import AnimatedSection from "@/components/AnimatedSection";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
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
  <main className="relative pt-28 pb-24 overflow-hidden">
    <FloatingOrbs />
    <div className="absolute inset-0 animated-grid opacity-20" />

    <div className="container relative mx-auto px-6 max-w-3xl" style={{ zIndex: 2 }}>
      <AnimatedSection>
        <span className="text-xs font-medium tracking-widest uppercase text-primary mb-4 block">Who I Am</span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-8">About Me</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          I&apos;m a Full-Stack Java Developer with a deep focus on building AI-powered, production-grade systems. I believe software should solve real problems — and I approach every project with an architecture-first mindset.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-16">
          From intelligent APIs to offline mobile AI assistants, I design systems that are scalable, secure, and human-centered. I thrive at the intersection of backend engineering, AI integration, and thoughtful system design.
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
