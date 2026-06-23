import React from 'react';

const Contact = ({ heading }) => {
  return (
    <section id="contacts" className="py-24 border-t border-gray-800 mt-16">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-0.5 w-12 bg-accent"></div>
            <span className="text-gray-400 font-medium">Contato</span>
          </div>
          <h2 className="text-5xl font-bold leading-tight mb-8">
            {heading.split('?').map((part, i) => (
              <React.Fragment key={i}>
                {part}{i === 0 ? '?' : ''}
                <br />
              </React.Fragment>
            ))}
          </h2>
          <button className="bg-accent text-white px-8 py-3 rounded font-medium hover:bg-orange-600 transition-colors">
            Enviar
          </button>
        </div>
        
        <div className="md:w-1/2 flex items-center">
          <form className="w-full space-y-6">
            <div>
              <input 
                type="text" 
                placeholder="Nome" 
                className="w-full bg-transparent border-b border-gray-700 pb-4 text-white focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="E-mail" 
                className="w-full bg-transparent border-b border-gray-700 pb-4 text-white focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <textarea 
                placeholder="Mensagem" 
                rows="4"
                className="w-full bg-transparent border-b border-gray-700 pb-4 text-white focus:outline-none focus:border-accent transition-colors resize-none"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
