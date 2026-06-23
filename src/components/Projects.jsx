import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Projetos</h2>
        <div className="w-px h-10 bg-accent mx-auto"></div>
      </div>

      <div className="space-y-32">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div key={project.id} className={`flex flex-col md:flex-row items-center gap-12 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Info Column */}
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold mb-6">{project.title}</h3>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-4 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex gap-4 items-center">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-accent text-white px-6 py-2.5 rounded font-medium hover:bg-orange-600 transition-colors"
                  >
                    Ver Github
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-sm font-medium border-b border-transparent hover:border-white pb-1 flex items-center gap-2"
                  >
                    Ver projeto ↗
                  </a>
                </div>
              </div>
              
              {/* Image Column */}
              <div className="md:w-1/2 relative group">
                <div className="absolute inset-0 bg-gray-800 transform translate-x-4 translate-y-4 rounded-lg -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-auto rounded-lg shadow-xl object-cover border border-gray-800"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
