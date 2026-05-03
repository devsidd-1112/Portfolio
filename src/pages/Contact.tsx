import { useState, Suspense, lazy } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import MagneticButton from "@/components/animations/MagneticButton";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ParticleScene = lazy(() => import("@/components/3d/ParticleScene"));

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = "service_863ihmj";
      const templateId = "template_hp54u9b";
      const publicKey = "cqWKMwKXhmLHKeLCT";

      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_email: "siddarth2k5@gmail.com",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast.success("Message sent! I'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try emailing directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative pt-28 pb-24 overflow-hidden">
      <FloatingOrbs />
      <div className="absolute inset-0 animated-grid opacity-20" />
      <Suspense fallback={null}>
        <ParticleScene />
      </Suspense>

      <div className="container relative mx-auto px-6 max-w-2xl" style={{ zIndex: 2 }}>
        <AnimatedSection>
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-4 block">Let's Connect</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-4">Get in Touch</h1>
          <p className="text-muted-foreground mb-12">
            Interested in collaborating or discussing opportunities? Feel free to reach out.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-4 mb-14">
            {[
              { href: "mailto:siddarth2k5@gmail.com", icon: Mail, label: "siddarth2k5@gmail.com" },
              { href: "https://github.com/devsidd-1112", icon: Github, label: "GitHub", ext: true },
              { href: "https://linkedin.com/in/siddarth-p-159a62305", icon: Linkedin, label: "LinkedIn", ext: true },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.ext ? "_blank" : undefined}
                rel={link.ext ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
              >
                <link.icon size={15} /> {link.label}
              </a>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">Name</label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                className="bg-card border-border rounded-xl h-12 focus:border-primary/50 focus:ring-primary/20 transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">Email</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="bg-card border-border rounded-xl h-12 focus:border-primary/50 focus:ring-primary/20 transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">Message</label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="bg-card border-border rounded-xl resize-none focus:border-primary/50 focus:ring-primary/20 transition-all"
              />
            </div>
            <MagneticButton className="inline-block">
              <Button type="submit" variant="hero" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
              </Button>
            </MagneticButton>
          </form>
        </AnimatedSection>
      </div>
    </main>
  );
};

export default Contact;
