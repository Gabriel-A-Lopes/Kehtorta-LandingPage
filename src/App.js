import './App.css';
import HeroSection from './components/hero/HeroSection';
import AboutSection from './components/about/AboutSection';
import Separator from './components/separator/SeparatorSection.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HeroSection></HeroSection>
      <Separator></Separator>
      <AboutSection></AboutSection>
      </header>
    </div>
  );
}

export default App;
