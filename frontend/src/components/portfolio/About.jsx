import { motion } from "framer-motion";
import { CV } from "../../data/cv";

export const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-20 md:py-32 bg-tbg"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="text-sm font-mono uppercase tracking-[0.2em] text-tprimary">
              01 / About
            </span>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold tracking-tight text-tfg">
              Precision is a habit, not an act.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <p className="text-lg sm:text-xl leading-relaxed text-tfg/90">
              {CV.summary}
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { k: "Phone", v: CV.phone },
                { k: "Email", v: CV.email },
                { k: "Location", v: CV.location },
                { k: "Languages", v: CV.languages.join(" • ") },
              ].map((d) => (
                <div
                  key={d.k}
                  className="p-4 rounded-[var(--t-radius)] border border-tborder bg-tsurface"
                >
                  <div className="text-xs uppercase tracking-[0.12em] text-tmuted">
                    {d.k}
                  </div>
                  <div className="mt-1 text-sm font-medium text-tfg break-words">
                    {d.v}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
