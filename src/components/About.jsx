import React from 'react';

const About = ({ data, services }) => {
  return (
    <section id="about" className="py-16 flex flex-col md:flex-row gap-16">
      <div className="md:w-1/3 space-y-8">
        {services.map((service, index) => (
          <div key={index} className="flex items-center gap-4 border-l-2 border-transparent hover:border-accent pl-4 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-lg text-accent text-2xl">
              {/* Simple icons placeholders */}
              {service.icon === 'website' && '🖥️'}
              {service.icon === 'app' && '📱'}
              {service.icon === 'hosting' && '☁️'}
            </div>
            <h4 className="font-medium text-lg">{service.title}</h4>
          </div>
        ))}
      </div>
      
      <div className="md:w-2/3">
        <h2 className="text-4xl font-bold mb-6">Sobre mim</h2>
        <p className="text-gray-400 leading-relaxed mb-10 max-w-2xl text-lg">
          {data.about}
        </p>
      </div>
    </section>
  );
};

export default About;
