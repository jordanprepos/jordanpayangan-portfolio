import { Download, Linkedin, Github } from "lucide-react";
import { CV } from "../../data/cv";

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="border-t border-tborder bg-tsurface py-12"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-9 h-9 bg-tprimary text-tprimary-foreground rounded-[var(--t-radius)] text-sm font-mono font-bold">
              {CV.initials}
            </span>
            <div>
              <div className="font-heading font-semibold text-tfg">
                {CV.shortName}
              </div>
              <div className="text-xs text-tmuted">
                {CV.title} · {CV.location}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={CV.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-linkedin-link"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-10 h-10 rounded-[var(--t-radius)] border border-tborder text-tfg hover:border-tprimary hover:text-tprimary transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={CV.github}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-github-link"
              aria-label="GitHub"
              className="flex items-center justify-center w-10 h-10 rounded-[var(--t-radius)] border border-tborder text-tfg hover:border-tprimary hover:text-tprimary transition-colors duration-300"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={CV.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              data-testid="footer-download-cv-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-tfg border border-tborder rounded-[var(--t-radius)] hover:border-tprimary hover:text-tprimary transition-colors duration-300"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-tborder/60 text-center text-xs text-tmuted">
          © {new Date().getFullYear()} {CV.name}. Built with precision &amp; React.
        </div>
      </div>
    </footer>
  );
};
