import './app.scss';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/home';
import Parallax from './components/parallax/Parallax';
import Experience from './components/pages/experience';
import Contact from './components/pages/conatct';
import Skills from './components/pages/skills';

function App() {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Home />
      </section>
      {/* <section id="experience" className="experience-section">
        <Experience />
      </section>
      <section id="Our Expertise">Our Expertise</section> */}
      <section id="Service" className="experience-section">
        <Parallax type="services" />
      </section>
      <section id="DATA + AI">
        <Skills />
      </section>
      {/* <section id="Projects">
        <Parallax type="portfolio" />
      </section> */}
      <section id="Rewards">
        <Contact />
      </section>
    </div>
  )
}

export default App
