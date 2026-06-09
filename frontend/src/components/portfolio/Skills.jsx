import { motion } from "framer-motion";
import {
  Bot,
  ShieldCheck,
  Code2,
  Workflow,
} from "lucide-react";
import { CV } from "../../data/cv";

const icons = [Bot, ShieldCheck, Code2, Workflow];

export const Skills = () => {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="py-20 md:py-32 bg-tsurface border-y border-tborder"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-sm font-mono uppercase tracking-[0.2em] text-tprimary">
            02 / Capabilities
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-tfg">
            The QA Control Room
          </h2>
          <p className="mt-4 text-tmuted">
            A full-stack quality arsenal spanning automation frameworks, testing
            methodologies, technical foundations and delivery tooling.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {CV.skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-testid={`skill-group-${i}`}
                className="group p-6 sm:p-8 rounded-[var(--t-radius)] border border-tborder bg-tbg hover:border-tprimary/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center justify-center w-11 h-11 rounded-[var(--t-radius)] bg-tprimary/10 text-tprimary group-hover:bg-tprimary group-hover:text-tprimary-foreground transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-tfg">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs sm:text-sm font-medium text-tfg/80 border border-tborder rounded-full bg-tsurface hover:border-tprimary hover:text-tprimary transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
