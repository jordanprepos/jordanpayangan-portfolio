import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Briefcase, Download, Menu, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { CV } from "../../data/cv";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const themeOptions = [
  { id: "minimal", label: "Minimal", icon: Sun, testid: "theme-switcher-minimal" },
  { id: "dark", label: "Dark", icon: Moon, testid: "theme-switcher-dark" },
  { id: "corporate", label: "Corporate", icon: Briefcase, testid: "theme-switcher-corporate" },
];

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl border-b border-tborder bg-[var(--t-bg)]/80"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#top"
            data-testid="logo-link"
            className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight"
          >
            <span className="flex items-center justify-center w-9 h-9 bg-tprimary text-tprimary-foreground rounded-[var(--t-radius)] text-sm font-mono font-bold">
              {CV.initials}
            </span>
            <span className="hidden sm:inline text-tfg">{CV.shortName}</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-testid={`nav-${link.label.toLowerCase()}`}
                className="text-sm font-medium text-tmuted hover:text-tprimary transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-tprimary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Theme switcher */}
            <div className="flex items-center gap-1 p-1 rounded-full border border-tborder bg-tsurface">
              {themeOptions.map((opt) => {
                const Icon = opt.icon;
                const active = theme === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setTheme(opt.id)}
                    data-testid={opt.testid}
                    aria-label={`Switch to ${opt.label} theme`}
                    title={`${opt.label} theme`}
                    className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                      active
                        ? "bg-tprimary text-tprimary-foreground scale-105"
                        : "text-tmuted hover:text-tfg"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                );
              })}
            </div>

            {/* Download CV */}
            <a
              href={CV.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              data-testid="header-download-cv-btn"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-tfg text-tbg rounded-[var(--t-radius)] hover:opacity-90 active:scale-95 transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              CV
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              data-testid="mobile-menu-toggle"
              className="lg:hidden flex items-center justify-center w-9 h-9 text-tfg"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="lg:hidden border-t border-tborder bg-[var(--t-bg)]/95 backdrop-blur-xl overflow-hidden"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                className="py-3 text-base font-medium text-tfg hover:text-tprimary transition-colors border-b border-tborder/50"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CV.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold bg-tprimary text-tprimary-foreground rounded-[var(--t-radius)]"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};
