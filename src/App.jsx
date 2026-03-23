import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PearlAbyss from './components/PearlAbyss';
import Experience from './components/Experience';
import Footer from './components/Footer';
import resumeData from './resumeData';

function App() {
  return (
    <div className="App">
      <div className="grain-overlay" aria-hidden="true" />
      <Header resumeData={resumeData} />
      <Hero />
      <About resumeData={resumeData} />
      <PearlAbyss resumeData={resumeData} />
      <Experience resumeData={resumeData} />
      <Footer resumeData={resumeData} />
    </div>
  );
}

export default App;