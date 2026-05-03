import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      {/* Bottom border glow */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, hsl(230 85% 62% / 0.15), transparent)" }} />
      )}

      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="text-xl font-bold tracking-tight text-foreground relative group">
          <span className="relative z-10">&lt;Siddarth /&gt;</span>
          <span className="absolute inset-0 rounded-lg bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300" />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-secondary/50 ${
                location.pathname === l.to ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
              {location.pathname === l.to && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full"
                  style={{ background: "var(--gradient-primary)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-border"
          >
            <div className="container mx-auto flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === l.to ? "text-foreground bg-secondary/50" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
