import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import ResearchDomains from './sections/ResearchDomains';
import Methodology from './sections/Methodology';
import Results from './sections/Results';
import Team from './sections/Team';
import Downloads from './sections/Downloads';
import Milestones from './sections/Milestones';
import Contact from './sections/Contact';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Check user preference
    const isDarkMode = localStorage.getItem('darkMode') !== 'false';
    setDarkMode(isDarkMode);
    
    // Apply dark mode class if needed
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    
    // Toggle dark mode class
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
  };

  return (
    <AnimatePresence>
      <div className="flex flex-col min-h-screen">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main className="flex-grow">
          <Home />
          <About />
          <ResearchDomains />
          <Methodology />
          <Results />
          <Downloads />
          <Milestones />
          <Team />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;