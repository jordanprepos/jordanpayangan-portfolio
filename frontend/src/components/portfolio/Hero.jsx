import { motion } from "framer-motion";
import { Download, Mail, MapPin, ArrowDown } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { CV } from "../../data/cv";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Hero = () => {
  const { theme } = useTheme();
  const bg = CV.heroImages[theme];
  const overlay =
    theme === "dark"
      ? "bg-black/70"
      : theme === "corporate"
      ? "bg-slate-50/80"
      : "bg-white/75";

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Background image swaps per theme */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt=""
          className="w-full h-full object-cover transition-opacity duration-700"
        />
        <div className={`absolute inset-0 ${overlay} backdrop-blur-[2px] transition-colors duration-500`} />
        <div className="absolute inset-0 grain opacity-[0.15] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          {/* Main intro — col-span 8 */}
          <div className="lg:col-span-8">
            <motion.div variants={item}>
              <span
                data-testid="hero-availability-badge"
                className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono uppercase tracking-[0.2em] text-tprimary border border-tprimary/30 rounded-full bg-tprimary/5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-tprimary animate-pulse" />
                Open to Opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-tfg leading-[0.95]"
            >
              {CV.shortName}
              <span className="block text-tprimary mt-2">{CV.title}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-2xl text-base sm:text-lg text-tmuted leading-relaxed"
            >
              Specializing in{" "}
              <span className="text-tfg font-semibold">{CV.subtitle}</span> — manual,
              API & UI/Mobile automation with Selenium, Appium & RestAssured. Turning
              edge cases into rock-solid fintech reliability.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-4 text-sm text-tmuted"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-tprimary" /> {CV.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Mail className="w-4 h-4 text-tprimary" /> {CV.email}
              </span>
            </motion.div>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              <a
                href={CV.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                data-testid="hero-download-cv-btn"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold bg-tprimary text-tprimary-foreground rounded-[var(--t-radius)] hover:opacity-90 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-lg shadow-tprimary/20"
              >
                <Download className="w-4 h-4" />
                Download CV (PDF)
              </a>
              <a
                href="#contact"
                data-testid="hero-contact-btn"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-tfg border border-tborder rounded-[var(--t-radius)] hover:border-tprimary hover:text-tprimary hover:-translate-y-0.5 active:scale-95 transition-all duration-300 bg-tsurface/40"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Quick stats — col-span 4 */}
          <motion.div variants={item} className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-4">
              {CV.stats.map((s) => (
                <div
                  key={s.label}
                  className="p-5 rounded-[var(--t-radius)] border border-tborder bg-tsurface/60 backdrop-blur-md hover:border-tprimary/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="font-mono text-3xl sm:text-4xl font-bold text-tprimary">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.12em] text-tmuted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-tmuted hover:text-tprimary transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  );
};
