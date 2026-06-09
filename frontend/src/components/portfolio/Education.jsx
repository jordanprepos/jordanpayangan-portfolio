import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Building2 } from "lucide-react";
import { CV } from "../../data/cv";

const typeIcon = {
  Education: GraduationCap,
  Course: BookOpen,
  Certification: Award,
  Internship: Building2,
};

export const Education = () => {
  return (
    <section
      id="education"
      data-testid="education-section"
      className="py-20 md:py-32 bg-tsurface border-y border-tborder"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="text-sm font-mono uppercase tracking-[0.2em] text-tprimary">
            04 / Credentials
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-tfg">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CV.education.map((ed, i) => {
            const Icon = typeIcon[ed.type] || Award;
            return (
              <motion.div
                key={`${ed.title}-${i}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-testid={`education-item-${i}`}
                className="group flex gap-5 p-6 rounded-[var(--t-radius)] border border-tborder bg-tbg hover:border-tprimary/50 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-[var(--t-radius)] bg-tprimary/10 text-tprimary group-hover:bg-tprimary group-hover:text-tprimary-foreground transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-tmuted">
                    {ed.type}
                  </span>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-tfg leading-snug">
                    {ed.title}
                  </h3>
                  <p className="mt-1 text-sm text-tmuted">
                    {ed.org} · <span className="font-mono">{ed.period}</span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
