import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Preloader from './components/sections/Preloader';
import Navbar from './components/navigation/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import LineWaves from './components/ui/LineWaves';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while splash screen is active
    document.body.style.overflow = loading ? 'hidden' : 'auto';
  }, [loading]);

  return (
    <ThemeProvider>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
        <LineWaves
          speed={0.3}
          innerLineCount={32}
          outerLineCount={36}
          warpIntensity={1}
          rotation={-45}
          edgeFadeWidth={0}
          colorCycleSpeed={1}
          brightness={0.08}
          color1="#a26716"
          color2="#f06114"
          color3="#ffffff"
          enableMouseInteraction
          mouseInfluence={2}
        />
      </div>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="App">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
