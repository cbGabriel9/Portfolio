import React from 'react';

const TechStack = ({ stack }) => {
  return (
    <div className="border-t border-b border-gray-800 py-8 my-16 overflow-x-auto">
      <div className="flex justify-between items-center min-w-max gap-12 text-gray-500 font-medium">
        {stack.map((tech, index) => (
          <div key={index} className="hover:text-gray-300 transition-colors uppercase tracking-wider">
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
