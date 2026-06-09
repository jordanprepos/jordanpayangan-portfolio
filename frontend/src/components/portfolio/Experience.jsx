import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { CV } from "../../data/cv";

export const Experience = () => {
  return (
    <section
      id="experience"
      data-testid="experience-timeline"
      className="py-20 md:py-32 bg-tbg"
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
            03 / Experience
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-tfg">
            Where I've Made Impact
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-tborder pl-8 md:pl-12 ml-2 space-y-12">
          {CV.experience.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              data-testid={`experience-item-${i}`}
              className="relative"
            >
              {/* Dot */}
              <span className="absolute -left-[42px] md:-left-[58px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-tprimary text-tprimary-foreground ring-4 ring-tbg">
                <Briefcase className="w-3 h-3" />
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-tfg">
                  {exp.role}
                </h3>
                <span className="font-mono text-xs sm:text-sm text-tprimary whitespace-nowrap px-3 py-1 rounded-full border border-tprimary/30 bg-tprimary/5">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm font-medium text-tmuted mb-5 uppercase tracking-wide">
                {exp.company}
              </p>

              <ul className="space-y-3">
                {exp.points.map((p, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-sm sm:text-base text-tfg/85 leading-relaxed"
                  >
                    <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-tprimary" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
