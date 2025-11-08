import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "./experiencia";
import Education from "./educacion";
import Skills from "./habilidades";
import Projects from "./proyectos";
import Contact from "./contacto";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
