import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Boxes, Cpu, Network, Shield } from "lucide-react";

const concepts = [
  { icon: Boxes, title: "Microservices Architecture", desc: "Decomposing complex domains into resilient, independently deployable services." },
  { icon: Cpu, title: "AI-First Engineering", desc: "Integrating ML models and LLMs directly into production pipelines." },
  { icon: Network, title: "System Design", desc: "Designing for scale, availability, and performance from day one." },
  { icon: Shield, title: "Security by Design", desc: "JWT, RBAC, and data isolation baked into every layer." },
];

const ArchitectureSection = () => (
  <section className="relative py-28 sm:py-36 overflow-hidden">
    <div className="container relative mx-auto px-6">
      <AnimatedSection className="text-center mb-20">
        <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">Philosophy</span>
        <h2 className="text-3xl sm:text-5xl font-bold text-gradient mb-4">Architecture Mindset</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Every system I build starts with a clear architectural vision.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {concepts.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/20 overflow-hidden"
          >
            {/* Glass inner glow */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(230 85% 62% / 0.2), transparent)" }} />

            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                <item.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Connecting line decoration */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-48 opacity-20" style={{ background: "linear-gradient(180deg, transparent, hsl(230 85% 62% / 0.5), transparent)" }} />
    </div>
  </section>
);

export default ArchitectureSection;
