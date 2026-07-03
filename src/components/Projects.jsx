import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="flex flex-col items-center mb-20 relative z-10">
        <h3 className="text-tech text-primary mb-2 text-sm uppercase tracking-widest">
          // Meus_Trabalhos
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Projetos</h2>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
      </div>

      <div className="space-y-32 relative z-10">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={project.id} className={`group flex flex-col md:flex-row items-center gap-12 ${!isEven ? 'md:flex-row-reverse' : ''}`}>

              {/* Info Column */}
              <div className="md:w-1/2 relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="text-tech text-primary mb-2 opacity-70 text-sm font-medium">0{index + 1}.</div>
                  <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <div className="p-6 rounded-md bg-dark-surface border border-white/5 shadow-2xl relative z-20 mb-6 group-hover:border-primary/30 group-hover:-translate-y-1 transition-all duration-300">
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-8 relative z-20">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-tech text-primary bg-primary/10 rounded-sm border border-primary/20 hover:bg-primary/20 hover:-translate-y-1 transition-transform cursor-default"
                        style={{ transitionDelay: `${tagIndex * 50}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 items-center relative z-20 font-tech text-sm font-bold">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary flex items-center gap-2 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                    >
                      Ver Projeto ↗
                    </a>
                  </div>
                </div>
              </div>

              {/* Image Column */}
              <div className="md:w-1/2 relative">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden rounded-md border border-white/10 group-hover:border-primary/50 transition-colors duration-500">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full aspect-video object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
