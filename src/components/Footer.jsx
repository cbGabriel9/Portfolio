import React from 'react';

const Footer = ({ data }) => {
  return (
    <footer className="py-12 flex flex-col items-center border-t border-gray-800">
      <div className="text-xl font-bold tracking-tight mb-2">
        {data.name || "Logo"}
      </div>
      <p className="text-gray-500 text-sm mb-6">
        Desenvolvido com curiosidade. Vamos criar coisas que importam.
      </p>
      
      <div className="flex gap-6">
        <a href={data.social.email} className="w-10 h-10 rounded-full bg-white text-background flex items-center justify-center hover:bg-gray-200 transition-colors">
          <span className="sr-only">Email</span>
          📧
        </a>
        <a href={data.social.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-background flex items-center justify-center hover:bg-gray-200 transition-colors">
          <span className="sr-only">GitHub</span>
          GH
        </a>
        <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-background flex items-center justify-center hover:bg-gray-200 transition-colors">
          <span className="sr-only">LinkedIn</span>
          IN
        </a>
      </div>
    </footer>
  );
};

export default Footer;
