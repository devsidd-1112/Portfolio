import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Footer = () => (
  <footer className="relative border-t border-border">
    {/* Top glow line */}
    <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent 10%, hsl(230 85% 62% / 0.15), hsl(270 80% 60% / 0.1), transparent 90%)" }} />

    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-lg font-bold text-foreground">&lt;Siddarth /&gt;</span>
          <p className="text-sm text-muted-foreground">
            Building scalable systems and intelligent applications.
          </p>
        </div>

        <div className="flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/devsidd-1112" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all" aria-label="GitHub">
            <Github size={16} />
          </a>
          <a href="https://linkedin.com/in/siddarth-p-159a62305" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a href="mailto:siddarth2k5@gmail.com" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all" aria-label="Email">
            <Mail size={16} />
          </a>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Siddarth P. Built with React, TypeScript & Tailwind CSS.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
