import { Header } from "../components/portfolio/Header";
import { Hero } from "../components/portfolio/Hero";
import { About } from "../components/portfolio/About";
import { Skills } from "../components/portfolio/Skills";
import { Experience } from "../components/portfolio/Experience";
import { Education } from "../components/portfolio/Education";
import { Contact } from "../components/portfolio/Contact";
import { Footer } from "../components/portfolio/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-tbg text-tfg antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
