import React from 'react';

const Hero = ({ data }) => {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-between py-16">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-4xl font-bold mb-2">
          Olá <span className="text-accent">.</span>
        </h2>
        <div className="flex items-center gap-4 mb-4">
          <div className="h-0.5 w-16 bg-accent"></div>
          <h3 className="text-2xl text-gray-300 font-light">Eu sou {data.name.split(' ')[0] || "Nome"}</h3>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
          {data.title}
        </h1>
        <div className="flex gap-4">
          <a href="#contacts" className="bg-accent text-white px-6 py-3 rounded hover:bg-orange-600 transition-colors font-medium">
            Tem um projeto?
          </a>
          <a href="#" className="border border-gray-600 text-gray-300 px-6 py-3 rounded hover:border-accent hover:text-white transition-colors font-medium">
            Meu currículo
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end relative">
        <div className="relative">
          {/* Decorative Circle */}
          <div className="absolute inset-0 border-4 border-accent rounded-full scale-[1.15] opacity-50"></div>
          {/* Decorative Chevrons (simplified as SVG or characters) */}
          <div className="absolute top-1/4 -left-12 text-accent text-6xl font-light opacity-50">&lt;</div>
          <div className="absolute bottom-1/4 -right-12 text-accent text-6xl font-light opacity-50">&gt;</div>
          
          <img 
            src={data.profilePicture} 
            alt={data.name} 
            className="w-80 h-80 object-cover rounded-full z-10 relative shadow-2xl border-2 border-gray-800"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
