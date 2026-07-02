import React, { useState, useEffect } from 'react';

const Header = ({ name }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-surface/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-12 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter text-tech text-white group cursor-pointer">
          <span className="text-primary group-hover:text-white transition-colors duration-300">&lt;</span>
          {name || "Logo"}
          <span className="text-primary group-hover:text-white transition-colors duration-300">/&gt;</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-sm text-gray-400 font-tech">
            <li><a href="#home" className="hover:text-primary transition-colors duration-300 relative group">
              Início
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a></li>
            <li><a href="#about" className="hover:text-primary transition-colors duration-300 relative group">
              Sobre
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a></li>
            <li><a href="#projects" className="hover:text-primary transition-colors duration-300 relative group">
              Projetos
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a></li>
            <li><a href="#contacts" className="hover:text-primary transition-colors duration-300 relative group">
              Contato
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
