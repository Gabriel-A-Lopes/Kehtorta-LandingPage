import { useEffect } from 'react';
import './App.css';
import HeroSection from './components/hero/HeroSection';
import AboutSection from './components/about/AboutSection';
import Separator from './components/separator/SeparatorSection.js';

function App() {
  //blocking the zoom feature for a static experience
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey || e.metaKey) {
        if (
          e.key === '+' || 
          e.key === '-' || 
          e.key === '=' || 
          e.key === '0' || 
          e.code === 'NumpadAdd' || 
          e.code === 'NumpadSubtract'
        ) {
          e.preventDefault();
        }
      }
    };

    const handleWheel = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <HeroSection />
        <Separator />
        <AboutSection />
      </header>
    </div>
  );
}

export default App;
