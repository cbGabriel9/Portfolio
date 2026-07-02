import React from 'react';

const Hero = ({ data }) => {
  return (
    <section id="home" className="pt-40 pb-20 md:pt-48 md:pb-32 flex flex-col md:flex-row items-center justify-between min-h-screen">
      <div className="md:w-1/2 mb-16 md:mb-0 relative z-10">
        <p className="text-tech text-primary mb-4 tracking-widest uppercase text-sm">
          &gt; init_user_profile
        </p>
        <h2 className="text-5xl md:text-7xl font-bold mb-2 tracking-tight text-white">
          Olá <span className="text-primary animate-pulse">_</span>
        </h2>
        <div className="flex items-center gap-4 mb-6 mt-4">
          <div className="h-[1px] w-12 bg-primary"></div>
          <h3 className="text-2xl md:text-3xl text-gray-300 font-light">
            Eu sou <span className="text-white font-medium">{data.name.split(' ')[0] || "Nome"}</span>
          </h3>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight text-gradient-green pb-2">
          {data.title}
        </h1>
        
        <div className="flex flex-wrap gap-6">
          <a href="#contacts" className="group relative px-8 py-4 bg-primary text-black font-tech font-bold rounded-sm overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_var(--color-primary-glow)]">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative flex items-center gap-2">
              Tem um projeto? <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
            </span>
          </a>
          <a href="#" className="group px-8 py-4 border border-primary/30 text-primary font-tech font-bold rounded-sm transition-all hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_var(--color-primary-glow)]">
            Meu currículo
          </a>
        </div>
      </div>
      
      <div className="md:w-1/2 flex justify-center md:justify-end relative z-10 mt-10 md:mt-0">
        <div className="relative group perspective-1000">
          {/* Decorative tech rings */}
          <div className="absolute inset-0 border border-primary/30 rounded-full scale-[1.25] animate-[spin_10s_linear_infinite] border-dashed"></div>
          <div className="absolute inset-0 border border-primary/20 rounded-full scale-[1.35] animate-[spin_15s_linear_infinite_reverse]"></div>
          
          {/* Tech accents */}
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary scale-[2] translate-x-10 -translate-y-10 opacity-100"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary scale-[2] -translate-x-10 translate-y-10 opacity-100"></div>
          
          {/* Profile image container */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary shadow-[0_0_50px_var(--color-primary-glow)]">
            <img 
              src={data.profilePicture} 
              alt={data.name} 
              className="w-full h-full object-cover transform scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
