import React, { useState } from 'react';

const Contact = ({ heading }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = () => {
    if (!formData.message) {
      alert("Por favor, digite uma mensagem.");
      return;
    }

    // Substitua pelo seu número de WhatsApp (com DDI 55 para o Brasil + DDD + número)
    const phoneNumber = "5549991058904";

    const text = `Olá! Meu nome é ${formData.name || 'um visitante'} ${formData.email ? `(${formData.email})` : ''}.\n\n*Mensagem:*\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contacts" className="py-24 border-t border-white/5 mt-16 relative">
      <div className="flex flex-col md:flex-row gap-16 relative z-10">

        {/* Left Side: Contact Text */}
        <div className="md:w-1/2">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="text-tech text-primary uppercase text-sm tracking-widest">// Iniciar_Conexão</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8 text-white">
            {heading.split('?').map((part, i) => (
              <React.Fragment key={i}>
                {part}{i === 0 ? <span className="text-primary">?</span> : ''}
                <br />
              </React.Fragment>
            ))}
          </h2>

          <p className="text-gray-400 mb-10 max-w-md">
            Estou sempre aberto a discutir desenvolvimento de produtos, novas tecnologias ou oportunidades.
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <div className="md:w-1/2 flex items-center">
          <form className="w-full space-y-8 bg-dark-surface/50 p-8 rounded-lg border border-white/5 backdrop-blur-sm relative group">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/50 group-hover:border-primary transition-colors"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/50 group-hover:border-primary transition-colors"></div>

            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nome"
                className="w-full bg-transparent border-b border-gray-700 pb-3 text-white placeholder-gray-600 focus:outline-none focus:border-transparent transition-colors peer font-tech"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary peer-focus:w-full transition-all duration-300"></div>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                className="w-full bg-transparent border-b border-gray-700 pb-3 text-white placeholder-gray-600 focus:outline-none focus:border-transparent transition-colors peer font-tech"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary peer-focus:w-full transition-all duration-300"></div>
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mensagem"
                rows="4"
                className="w-full bg-transparent border-b border-gray-700 pb-3 text-white placeholder-gray-600 focus:outline-none focus:border-transparent transition-colors resize-none peer font-sans"
              ></textarea>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary peer-focus:w-full transition-all duration-300"></div>
            </div>

            <button
              type="button"
              onClick={handleWhatsAppSubmit}
              className="group/btn relative w-full overflow-hidden bg-primary/10 text-primary border border-primary/50 py-4 font-tech font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-colors duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Enviar Mensagem <span className="group-hover/btn:translate-x-2 transition-transform duration-300">&gt;&gt;</span>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
