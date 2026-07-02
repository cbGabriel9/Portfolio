import React from 'react';

const TechStack = ({ stack }) => {
  return (
    <div className="relative py-12 my-10 overflow-hidden border-y border-white/5 bg-dark-surface/30 backdrop-blur-sm">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-dark-bg to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-dark-bg to-transparent z-10"></div>
      
      <div className="flex justify-center flex-wrap gap-x-12 gap-y-6 text-gray-500 font-tech">
        {stack.map((tech, index) => (
          <div 
            key={index} 
            className="group flex items-center gap-2 cursor-default"
          >
            <span className="text-primary/0 group-hover:text-primary transition-colors duration-300">&gt;</span>
            <span className="hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
