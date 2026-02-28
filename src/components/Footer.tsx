import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-8">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Developer Portfolio. Built with precision.
      </p>
      <div className="flex items-center gap-5">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href="mailto:dev@example.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
