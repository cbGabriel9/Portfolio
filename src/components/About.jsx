import React from 'react';

const About = ({ data, services }) => {
  return (
    <section id="about" className="py-24 relative">
      <div className="flex flex-col md:flex-row gap-16 relative z-10">
        
        {/* Left Side: Services */}
        <div className="md:w-1/3 space-y-4">
          <h3 className="text-tech text-primary mb-8 text-sm uppercase tracking-widest border-b border-primary/20 pb-2 inline-block">
            // Habilidades_
          </h3>
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative flex items-center gap-4 p-4 rounded-md border border-white/5 bg-dark-surface/50 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 cursor-default"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              <div className="w-12 h-12 flex items-center justify-center bg-black/50 rounded text-primary text-2xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                {service.icon === 'website' && '🖥️'}
                {service.icon === 'app' && '📱'}
                {service.icon === 'hosting' && '☁️'}
              </div>
              <h4 className="font-tech text-sm text-gray-300 group-hover:text-white transition-colors">
                {service.title}
              </h4>
            </div>
          ))}
        </div>
        
        {/* Right Side: About Text */}
        <div className="md:w-2/3">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold">Sobre mim</h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/50 to-transparent"></div>
          </div>
          <div className="relative group p-8 rounded-lg border border-white/5 bg-dark-surface/30 backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <p className="text-gray-400 leading-relaxed text-lg font-light relative z-10 group-hover:text-gray-300 transition-colors">
              {data.about}
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
