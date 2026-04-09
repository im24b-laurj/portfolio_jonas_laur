import Hero from '../src/components/Hero';
import Navbar from '../src/components/Navbar';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Projects';
import Interests from '../src/components/Interests';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
