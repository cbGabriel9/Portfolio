import minhaFoto from "../assets/eu animacao.png";
import rpgSystemImagem from "../assets/logoRpgSystem.jpg";
import mystoganERPImagem from "../assets/MystoganERPLogo.png";
import cortaPedraImagem from "../assets/projeto-cortapedra.webp";
import ibrImagem from "../assets/projeto-ibr.webp";
import medidaInLocoImagem from "../assets/projeto-medida-inloco.webp";
import appOrcamentoImagem from "../assets/projeto-app-orcamento.webp";
import doceManiaImagem from "../assets/projeto-docemania.webp";

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
  techStack: ["HTML5", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Python", "FastAPI", "PHP", "PostgreSQL", "Docker", "Git"],
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
  // Cada projeto:
  //   status      etiqueta que aparece acima do título
  //   liveUrl     endereço da aplicação no ar. Só vira botão se o domínio estiver
  //               na lista de src/lib/externalLink.js; sem liveUrl, não há botão
  //   accessNote  aviso embaixo do botão (ex.: a aplicação pede login)
  projects: [
    {
      id: 1,
      title: "Corta Pedra",
      status: "No ar · beta",
      tags: ["React", "TypeScript", "Tailwind", "Python", "FastAPI", "PostgreSQL", "Docker"],
      description: "Marketplace B2B de peças de pedra cortadas sob medida. Centrais de corte publicam seus serviços e preços; marmoristas montam o pedido peça por peça, com o acabamento de cada aresta, e recebem o orçamento na hora. Inclui quadro de produção, etiquetas e pagamento por Pix. É também o meu TCC de Ciência da Computação.",
      liveUrl: "https://www.cortapedra.com.br/",
      accessNote: "Acesso com login",
      imageUrl: cortaPedraImagem
    },
    {
      id: 2,
      title: "IBR Recortados",
      status: "MVP em construção",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Docker"],
      description: "Plataforma B2B em que distribuidores, marmorarias e construtoras pedem recortados de pedra sob medida (soleiras, peitoris, bordas, pisos). Cada pedido passa por conferência e pagamento e gera o arquivo de importação para o ERP da fábrica, sem redigitação.",
      liveUrl: "https://ibr-recortados-orpin.vercel.app/",
      accessNote: "Acesso com login",
      imageUrl: ibrImagem
    },
    {
      id: 3,
      title: "Medida inLoco",
      status: "Piloto em obra",
      tags: ["React", "TypeScript", "PWA", "PostgreSQL", "Vercel"],
      description: "App de celular (PWA) para anotar na obra as medidas de soleiras e peitoris e exportar um CSV que o ERP da marmoraria importa direto. Funciona instalado no celular e envia as medições para o App de Orçamento.",
      liveUrl: "https://medida-inloco.vercel.app/",
      accessNote: "Acesso com login (contas da empresa)",
      imageUrl: medidaInLocoImagem
    },
    {
      id: 4,
      title: "App de Orçamento",
      status: "Uso interno",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Vitest"],
      description: "Transformou uma planilha de orçamento com macros em um app web para celular e computador, com o cálculo conferido centavo por centavo contra a planilha original e a proposta gerada em PDF.",
      // Sem botão de propósito: é uma ferramenta interna da empresa (ver externalLink.js).
      liveUrl: null,
      accessNote: "Ferramenta interna, acesso restrito",
      imageUrl: appOrcamentoImagem
    },
    {
      id: 5,
      title: "Doce Mania",
      status: "No ar",
      tags: ["HTML", "CSS", "JavaScript", "Vercel", "API do GitHub"],
      description: "Cardápio online de uma confeitaria: o cliente escolhe os doces e a quantidade, e o pedido segue pronto para o WhatsApp. A dona atualiza preços, doces e fotos sozinha, sem mexer em código, e o site se publica de novo a cada alteração.",
      liveUrl: "https://docemania.vercel.app/",
      imageUrl: doceManiaImagem
    },
    {
      id: 6,
      title: "Mystogan ERP",
      tags: ["HTML", "CSS", "React", "Python", "FastAPI", "Docker", "Axios", "PostgreSQL"],
      description: "Uma aplicação destinada a fazer o controle interno de uma empresa, contendo os módulos de: Dashboard Geral, Pedidos, Parceiros, Estoque, Entregas, Financeiro e Gestão do RH",
      liveUrl: null,
      imageUrl: mystoganERPImagem
    },
    {
      id: 7,
      title: "RPG System",
      status: "Projeto acadêmico",
      tags: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
      description: "Plataforma WEB para criação, gerenciamento e participação em mesas de RPG (Role-Playing Game).",
      liveUrl: null,
      imageUrl: rpgSystemImagem
    }
  ],
  contact: {
    heading: "Tem um projeto? Vamos conversar!",
  }
};
