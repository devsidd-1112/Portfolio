import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <main className="pt-28 pb-24">
      <div className="container mx-auto px-6 max-w-2xl">
        <AnimatedSection>
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">Get in Touch</h1>
          <p className="text-muted-foreground mb-12">
            Have a project in mind or want to discuss opportunities? Let&apos;s connect.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex gap-6 mb-12">
            <a href="mailto:dev@example.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={16} /> dev@example.com
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Github size={16} /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                className="bg-card border-border rounded-xl h-11"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="bg-card border-border rounded-xl h-11"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="bg-card border-border rounded-xl resize-none"
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
              Send Message <Send size={16} />
            </Button>
          </form>
        </AnimatedSection>
      </div>
    </main>
  );
};

export default Contact;
