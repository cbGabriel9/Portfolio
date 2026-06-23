import React from 'react';

const Header = ({ name }) => {
  return (
    <header className="flex justify-between items-center py-8">
      <div className="text-xl font-bold tracking-tight">
        {name || "Logo"}
      </div>
      <nav>
        <ul className="flex space-x-8 text-sm text-gray-400">
          <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
          <li><a href="#about" className="hover:text-white transition-colors">Sobre</a></li>
          <li><a href="#projects" className="hover:text-white transition-colors">Projetos</a></li>
          <li><a href="#contacts" className="hover:text-white transition-colors">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
