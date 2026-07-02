import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';
import bgVideo from './assets/fundoportfolio2.mp4';

// Dynamic Background Component
const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-dark-bg">
      {/* Background Video - Full opacity to preserve HD quality */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      
      {/* Simple dark overlays to maintain text readability without distorting video colors */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen text-gray-200 selection:bg-primary selection:text-black">
      <Background />
      
      {/* Top Section (Hero) - Clear background to show video fully */}
      <div className="relative w-full">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">
          <Header name={portfolioData.personalInfo.name} />
          <Hero data={portfolioData.personalInfo} />
        </div>
      </div>
      
      {/* Rest of the site - Sections inside individual glass cards */}
      <main className="relative z-10 pb-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 space-y-32">
          
          <div className="bg-black/85 backdrop-blur-md rounded-3xl border border-white/5 shadow-2xl px-6 md:px-12">
            <TechStack stack={portfolioData.techStack} />
          </div>
          
          <div className="bg-black/85 backdrop-blur-md rounded-3xl border border-white/5 shadow-2xl px-6 md:px-12">
            <About data={portfolioData.personalInfo} services={portfolioData.services} />
          </div>
          
          <div className="bg-black/85 backdrop-blur-md rounded-3xl border border-white/5 shadow-2xl px-6 md:px-12">
            <Projects projects={portfolioData.projects} />
          </div>
          
          <div className="bg-black/85 backdrop-blur-md rounded-3xl border border-white/5 shadow-2xl px-6 md:px-12">
            <Contact heading={portfolioData.contact.heading} />
          </div>
          
          <div className="bg-black/85 backdrop-blur-md rounded-3xl border border-white/5 shadow-2xl px-6 md:px-12">
            <Footer data={portfolioData.personalInfo} />
          </div>
          
        </div>
      </main>
    </div>
  );
}

export default App;
