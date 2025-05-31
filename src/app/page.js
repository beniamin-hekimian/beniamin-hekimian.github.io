import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Services from "../components/sections/services";
import Skills from "../components/sections/skills";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
