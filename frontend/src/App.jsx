import React, { useEffect } from 'react';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import WorkExperience from './pages/WorkExperience.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  useEffect(() => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#1e90ff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#1e90ff', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
          },
          retina_detect: true
        });
      }
    }, []);
    
  return (
    <div style={{ fontFamily: "CabinetGrotesk-Regular", position: 'relative', minHeight: '100vh', zIndex: 1}}>
      <div
        id="particles-js"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      ></div>
      <Home />
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
