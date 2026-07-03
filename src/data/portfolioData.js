import minhaFoto from "../assets/eu animacao.png";
import rpgSystemImagem from "../assets/logoRpgSystem.jpg";
import mystoganERPImagem from "../assets/MystoganERPLogo.png";

export const portfolioData = {
  // Substitua as informações abaixo pelas suas
  personalInfo: {
    name: "Gabriel Ceron Bianchi",
    title: "Desenvolvedor Full Stack",
    // Substitua a URL abaixo pela sua foto (ex: link do github, linkedin ou caminho local importado)
    profilePicture: minhaFoto,
    about: "Sou um desenvolvedor apaixonado por fazer aplicações funcionais e úteis. Tenho experiência na construção de interfaces de usuário dinâmicas e funcionais, sempre buscando aprender e me atualizar com as melhores tecnologias do mercado, trazendo um pouco de originalidade nas minhas aplicações e deixando um pouco do 'Gabriel' nelas.",
    social: {
      email: "mailto:g.ceronbianchi@gmail.com",
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
      title: "RPG System",
      tags: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
      description: "Plataforma WEB para criação, gerenciamento e participação em mesas de RPG (Role-Playing Game).",
      liveUrl: "#",   // Link para o projeto no ar
      imageUrl: rpgSystemImagem
    },
    {
      id: 2,
      title: "Mystogan ERP",
      tags: ["HTML", "CSS", "React", "Python", "FastAPI", "Docker", "Axios", "PostgreSQL"],
      description: "Uma aplicação destinada a fazer o controle interno de uma empresa, contendo os módulos de: Dashboard Geral, Pedidos, Parceiros, Estoque, Entregas, Financeiro e Gestão do RH",
      liveUrl: "#",
      imageUrl: mystoganERPImagem
    }
  ],
  contact: {
    heading: "Tem um projeto? Vamos conversar!",
  }
};
