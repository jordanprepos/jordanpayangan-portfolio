import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Send, Loader2, Linkedin, Github } from "lucide-react";
import { CV } from "../../data/cv";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (!emailOk) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      const detail = err?.response?.data?.detail;
      let msg = "Something went wrong. Please try again.";
      if (typeof detail === "string") {
        msg = detail;
      } else if (Array.isArray(detail) && detail[0]?.msg) {
        msg = detail[0].msg;
      }
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: CV.email, href: `mailto:${CV.email}` },
    { icon: Phone, label: "Phone", value: CV.phone, href: `tel:${CV.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: CV.location, href: null },
  ];

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-20 md:py-32 bg-tbg"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="text-sm font-mono uppercase tracking-[0.2em] text-tprimary">
              05 / Contact
            </span>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-tfg">
              Let's build reliable software.
            </h2>
            <p className="mt-5 text-tmuted leading-relaxed">
              Got a role, a project, or a tricky bug that needs a sharp eye? Drop me
              a message — I read every one.
            </p>

            <div className="mt-10 space-y-4">
              {contactInfo.map((c) => {
                const Icon = c.icon;
                const inner = (
                  <div className="flex items-center gap-4 p-4 rounded-[var(--t-radius)] border border-tborder bg-tsurface hover:border-tprimary/50 transition-colors duration-300">
                    <span className="flex items-center justify-center w-10 h-10 rounded-[var(--t-radius)] bg-tprimary/10 text-tprimary">
                      <Icon className="w-4 h-4" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-[0.12em] text-tmuted">
                        {c.label}
                      </div>
                      <div className="text-sm font-medium text-tfg">{c.value}</div>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={c.label}>{inner}</div>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={CV.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-linkedin-link"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-11 h-11 rounded-[var(--t-radius)] border border-tborder bg-tsurface text-tfg hover:border-tprimary hover:text-tprimary hover:-translate-y-0.5 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={CV.github}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-github-link"
                aria-label="GitHub"
                className="flex items-center justify-center w-11 h-11 rounded-[var(--t-radius)] border border-tborder bg-tsurface text-tfg hover:border-tprimary hover:text-tprimary hover:-translate-y-0.5 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              data-testid="contact-form"
              className="p-6 sm:p-10 rounded-[var(--t-radius)] border border-tborder bg-tsurface"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-[0.12em] text-tmuted mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    data-testid="contact-form-name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 text-sm bg-tbg text-tfg border border-tborder rounded-[var(--t-radius)] outline-none focus:border-tprimary focus:ring-2 focus:ring-tprimary/30 transition-all placeholder:text-tmuted/60"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-[0.12em] text-tmuted mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    data-testid="contact-form-email"
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 text-sm bg-tbg text-tfg border border-tborder rounded-[var(--t-radius)] outline-none focus:border-tprimary focus:ring-2 focus:ring-tprimary/30 transition-all placeholder:text-tmuted/60"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-[0.12em] text-tmuted mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  data-testid="contact-form-message"
                  placeholder="Tell me about the opportunity..."
                  className="w-full px-4 py-3 text-sm bg-tbg text-tfg border border-tborder rounded-[var(--t-radius)] outline-none focus:border-tprimary focus:ring-2 focus:ring-tprimary/30 transition-all resize-none placeholder:text-tmuted/60"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                data-testid="contact-form-submit"
                className="mt-6 inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-sm font-semibold bg-tprimary text-tprimary-foreground rounded-[var(--t-radius)] hover:opacity-90 active:scale-95 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-tprimary/20"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
