export const portfolioData = {
  // Substitua as informações abaixo pelas suas
  personalInfo: {
    name: "Gabriel Ceron Bianchi",
    title: "Desenvolvedor de Software",
    // Substitua a URL abaixo pela sua foto (ex: link do github, linkedin ou caminho local importado)
    profilePicture: "/src/assets/eu animacao.png",
    about: "Sou um desenvolvedor apaixonado por criar soluções web incríveis. Tenho experiência na construção de interfaces de usuário dinâmicas e funcionais, sempre buscando aprender e me atualizar com as melhores tecnologias do mercado.",
    stats: [
      { value: "120+", label: "Projetos Concluídos" },
      { value: "95%", label: "Satisfação dos Clientes" },
      { value: "10+", label: "Anos de Experiência" }
    ],
    social: {
      email: "mailto:g.ceronbianchi@exemplo.com",
      github: "https://github.com/cbGabriel9",
      linkedin: "https://www.linkedin.com/in/gabriel-ceron-bianchi-58435425b/"
    }
  },
  techStack: ["HTML5", "CSS", "Python", "PHP", "React", "Git"],
  services: [
    {
      title: "Desenvolvimento de Sites",
      icon: "website" // Placeholder para identificar qual ícone renderizar
    },
    {
      title: "Desenvolvimento de Apps",
      icon: "app"
    },
    {
      title: "Hospedagem de Sites",
      icon: "hosting"
    }
  ],
  projects: [
    // ADICIONE SEUS PROJETOS AQUI
    {
      id: 1,
      title: "Batalha Naval",
      tags: ["HTML", "CSS", "Javascript", "Node.js"],
      description: "O clássico jogo de Batalha Naval. O usuário pode jogar contra o computador em um tabuleiro interativo com gráficos modernos.",
      githubUrl: "#", // Link para o repositório
      liveUrl: "#",   // Link para o projeto no ar
      imageUrl: "https://via.placeholder.com/600x400/1e232b/ffffff?text=Projeto+Batalha+Naval"
    },
    {
      id: 2,
      title: "API de Filmes",
      tags: ["HTML", "CSS", "Javascript", "API", "Version Control"],
      description: "Uma aplicação que consome dados de uma API externa para listar e buscar informações de filmes, séries e atores.",
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: "https://via.placeholder.com/600x400/1e232b/ffffff?text=Projeto+API+Filmes"
    },
    {
      id: 3,
      title: "Calculadora Javascript",
      tags: ["HTML", "CSS", "Javascript", "Node.js"],
      description: "Uma calculadora completa com operações básicas e avançadas, construída puramente com Javascript e um layout responsivo.",
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: "https://via.placeholder.com/600x400/1e232b/ffffff?text=Projeto+Calculadora"
    },
    {
      id: 4,
      title: "Landing Page SaaS",
      tags: ["HTML", "CSS", "React", "Tailwind"],
      description: "Página de aterrissagem (landing page) para um produto SaaS. Focada em conversão, com design atrativo e moderno.",
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: "https://via.placeholder.com/600x400/1e232b/ffffff?text=Projeto+Landing+Page"
    }
  ],
  contact: {
    heading: "Tem um projeto? Vamos conversar!",
  }
};
