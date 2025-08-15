import './App.css';
import HeroSection from './components/hero/HeroSection';
import AboutSection from './components/about/AboutSection';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      </header>
    </div>
  );
}

export default App;
