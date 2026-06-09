import { Download } from "lucide-react";
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

        <div className="mt-8 pt-6 border-t border-tborder/60 text-center text-xs text-tmuted">
          © {new Date().getFullYear()} {CV.name}. Built with precision &amp; React.
        </div>
      </div>
    </footer>
  );
};
