import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

function App() {
  return (
    <div className="min-h-screen bg-background text-gray-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <Header name={portfolioData.personalInfo.name} />
        <main>
          <Hero data={portfolioData.personalInfo} />
          <TechStack stack={portfolioData.techStack} />
          <About data={portfolioData.personalInfo} services={portfolioData.services} />
          <Projects projects={portfolioData.projects} />
          <Contact heading={portfolioData.contact.heading} />
        </main>
        <Footer data={portfolioData.personalInfo} />
      </div>
    </div>
  );
}

export default App;
