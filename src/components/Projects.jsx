import React from 'react';
import { safeExternalUrl } from '../lib/externalLink';

// Link para fora: sem window.opener (a aplicação aberta não controla esta aba)
// e sem Referer (a aplicação não fica sabendo de onde o visitante veio).
const EXTERNAL_LINK = { target: '_blank', rel: 'noopener noreferrer', referrerPolicy: 'no-referrer' };

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
          const href = safeExternalUrl(project.liveUrl);
          const image = (
            <img
              src={project.imageUrl}
              alt={`Tela de ${project.title}`}
              loading="lazy"
              decoding="async"
              className="w-full aspect-video object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          );
          const imageFrame = "block relative overflow-hidden rounded-md border border-white/10 group-hover:border-primary/50 transition-colors duration-500";

          return (
            <div key={project.id} className={`group flex flex-col md:flex-row items-center gap-12 ${!isEven ? 'md:flex-row-reverse' : ''}`}>

              {/* Info Column */}
              <div className="md:w-1/2 relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3 mb-2 text-tech text-sm font-medium">
                    <span className="text-primary opacity-70">{String(index + 1).padStart(2, '0')}.</span>
                    {project.status && (
                      <span className="px-2 py-0.5 text-xs text-gray-300 border border-white/15 rounded-sm uppercase tracking-widest">
                        {project.status}
                      </span>
                    )}
                  </div>
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

                  {(href || project.accessNote) && (
                    <div className="flex flex-wrap gap-x-6 gap-y-3 items-center relative z-20 font-tech text-sm">
                      {href && (
                        <a
                          href={href}
                          {...EXTERNAL_LINK}
                          className="px-6 py-3 border border-primary/30 text-primary font-bold rounded-sm flex items-center gap-2 transition-all hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_var(--color-primary-glow)]"
                        >
                          Abrir aplicação <span aria-hidden="true">↗</span>
                          <span className="sr-only">(abre em uma nova aba)</span>
                        </a>
                      )}
                      {project.accessNote && (
                        <span className="text-gray-500 text-xs">{project.accessNote}</span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Image Column */}
              <div className="md:w-1/2 relative">
                {href ? (
                  <a href={href} {...EXTERNAL_LINK} tabIndex={-1} aria-hidden="true" className={imageFrame}>
                    {image}
                  </a>
                ) : (
                  <div className={imageFrame}>{image}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
