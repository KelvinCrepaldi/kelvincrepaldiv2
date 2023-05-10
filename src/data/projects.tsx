import ApiImage from "../assets/server1.svg";
import { IProject } from "@/interfaces/project.interface";

/*
export const techsData = [
  { name: "HTML5", icon: faHtml5 },
  { name: "CSS3", icon: faCss3 },
  { name: "Javascript", icon: faSquareJs },
  { name: "Typescript", icon: faSquareJs },
  { name: "React.js", icon: faReact },
  { name: "Redux", icon: faReact },

  { name: "Node.js", icon: faNodeJs },
  { name: "Flask", icon: faDatabase },
  { name: "Express", icon: faDatabase },
  { name: "Django", icon: faDatabase },
  { name: "Python", icon: faPython },
  { name: "Docker", icon: faDocker },

  { name: "Trello", icon: faTrello },
  { name: "Git", icon: faGit },

  { name: "TypeORM", icon: faMicrochip },
  { name: "MongoDB", icon: faMicrochip },
  { name: "PostgreSQL", icon: faMicrochip },
  { name: "Banco de dados SQL", icon: faMicrochip },
  { name: "GitHub", icon: faGithub },
];


{
  title: "",
  description: "",
  techs: ["", "", ""],
  repo_url: "",
  demo_url: "",
  img_print: "",
}, 
*/

export const projectsData: IProject[] = [
  {
    title: "kelvin Crepaldi v2",
    description: "Código fonte deste website.",
    techs: ["Next.js", "tailwinds", "Vercel", "fontawesome"],
    repo_url: "https://github.com/KelvinCrepaldi/kelvincrepaldiv2",
    demo_url: "https://kelvincrepaldi.vercel.app",
    img_print: "https://i.imgur.com/8oYfQvZ.png",
    type: "front",
  },
  {
    title: "PokeNext",
    description: "Biblioteca de Pokemons em Next.js e tailwind",
    techs: ["Next.js", "tailwinds", "Vercel", "fontawesome"],
    repo_url: "https://github.com/KelvinCrepaldi/pokenext",
    demo_url: "https://pokenext-nine-mu.vercel.app",
    img_print: "https://imgur.com/c03kfeM.jpg",
    type: "front",
  },
  {
    title: "VMBProject",
    description:
      "App para listar negociações de moedas digitais usando a API Mercadobitcoin.",
    techs: ["Vue.js 3", "Vuetify", "Axios", "Pinea", "Vercel", "Json"],
    repo_url: "https://github.com/KelvinCrepaldi/VMBProject",
    demo_url: "https://vmb-project.vercel.app",
    img_print: "https://imgur.com/CNeqR5O.jpg",
    type: "front",
  },
  {
    title: "Loginu-App",
    description:
      "Um simples projeto de autenticação com React.js usando uma api Node Express.ts...",
    techs: [
      "React.js",
      "Yup",
      "Styled Components",
      "jsonwebtoken",
      "Hook Form",
    ],
    repo_url: "https://github.com/KelvinCrepaldi/loginu-app",
    demo_url: "https://loginu-app.vercel.app",
    img_print: "https://imgur.com/tqDnSVY.jpg",
    type: "front",
  },
  {
    title: "Ninamartinho",
    description:
      "Projeto de Portfólio de um artista de concepts, ilustrações e jogos.",
    techs: [
      "React.js",
      "Styled Components",
      "Vercel",
      "Swiper",
      "Yup",
      "Hook Form",
      "React-Scroll",
      "fontawesome",
    ],
    repo_url: "https://github.com/KelvinCrepaldi/ninamartinho",
    demo_url: "https://ninamartinho.vercel.app",
    img_print: "https://imgur.com/ObGxsiM.jpg",
    type: "front",
  },
  {
    title: "Kelvin Crepaldi v1",
    description:
      "Projeto de Portfólio, onde eu guardo informações e projetos pessoais.",
    techs: [
      "React.js",
      "Styled Components",
      "Vercel",
      "EmailJS",
      "Yup",
      "Hook Form",
      "fontawesome",
    ],
    repo_url: "https://github.com/KelvinCrepaldi/portfolio",
    demo_url: "https://kelvincrepaldiold.vercel.app/",
    img_print: "https://imgur.com/7M5uhYT.jpg",
    type: "front",
  },
  {
    title: "Loginu-Api",
    description:
      "Projeto em Express de autenticação de usuário utilizando typescript",
    techs: ["Express", "Typescript", "Uuid", "Jsonwebtoken", "Dados voláteis"],
    repo_url: "https://github.com/KelvinCrepaldi/loginu-api",
    demo_url: "https://loginu-app.vercel.app",
    img_print: "",
    type: "back",
  },
  {
    title: "Eximoveisapi Gestão de Imóveis",
    description:
      "Projeto em Express.ts + TypeORM para gestão de imóveis, venda e agendamento de visitas",
    techs: [
      "Express",
      "Typescript",
      "TypeORM",
      "Docker",
      "Uuid",
      "Jsonwebtoken",
      "bcrypt",
    ],
    repo_url: "https://github.com/KelvinCrepaldi/eximoveisapi",
    demo_url:
      "https://github.com/KelvinCrepaldi/eximoveisapi/blob/main/diagrama.drawio.png",
    img_print: "",
    type: "back",
  },
  {
    title: "Lee Coffe",
    description: "E-commerce de venda de café.",
    techs: [
      "React.js",
      "Styled Components",
      "Material UI",
      "React Icons",
      "Hook Form",
      "Axios",
      "Yup",
      "JWT Decode",
      "Toastify",
      "Framer Motion",
      "Swiper",
      "JSON Server",
    ],
    repo_url: "https://github.com/KelvinCrepaldi/le-coffee-app",
    demo_url: "https://lee-coffee-app-react.vercel.app/",
    img_print: "https://i.imgur.com/R6RynjA.jpg",
    type: "front",
  },
  {
    title: "Mind Habits",
    description: "Aplicação em React onde o usuário possa gerir hábitos.",
    techs: [
      "React.js",
      "Styled components",
      "Material UI",
      "React icons",
      "Hook form",
      "Axios",
      "Yup",
      "JWT Decode",
      "Toastify",
    ],
    repo_url: "https://github.com/KelvinCrepaldi/mind-habits-app",
    demo_url: "https://mind-habits-app.vercel.app/",
    img_print: "https://i.imgur.com/wLhXXmY.png",
    type: "front",
  },
  {
    title: "Lig-4",
    description:
      "Um jogo Lig-4 criado com o objetivo de praticar manipulação dos elementos DOM.",
    techs: ["HTML5", "CSS3", "Javascript"],
    repo_url:
      "https://github.com/KelvinCrepaldi/entrega-lig-4-sprint-5-PauloHenriqueMagno",
    demo_url: "https://annabella.vercel.app/index.html",
    img_print: "https://i.imgur.com/6mqX40L.jpg",
    type: "front",
  },
  {
    title: "Anna Bella",
    description:
      "Uma simples página que criei para aprender conceitos básicos de HTML e CSS.",
    techs: ["HTML5", "CSS3"],
    repo_url: "https://github.com/KelvinCrepaldi/annabella",
    demo_url: "https://annabella.vercel.app/index.html",
    img_print: "https://i.imgur.com/lKpkM40.jpg",
    type: "front",
  },
  {
    title: "Le-Coffee API",
    description: "Le-Coffee é uma API para um e-commerce de cafés artesanais.",
    techs: ["Python", "Flask", "PostgreSQL", "Heroku"],
    repo_url: "https://github.com/KelvinCrepaldi/Le-Coffee-API",
    demo_url: "https://documenter.getpostman.com/view/19946807/UVsFz8tc",
    img_print: "",
    type: "back",
  },
  {
    title: "Fiado Online API",
    description:
      "API de Gerenciamento para Autônomos, ajudando a gerenciar gastos de investimentos, listas de clientes e controlar valores a receber.",
    techs: ["NodeJS", "ExpressJS", "TypeScript", "Jest", "JWT", "Docker"],
    repo_url: "https://github.com/KelvinCrepaldi/capstoneQ4-fiado-online",
    demo_url: "https://documenter.getpostman.com/view/20745940/UyrEiahn",
    img_print: "",
    type: "back",
  },
  {
    title: "HR-control API",
    description:
      "HR-control é uma API de RH feita para auxiliar os setores de recursos humanos em empresas.",
    techs: ["Python", "Django", "Docker"],
    repo_url: "https://github.com/KelvinCrepaldi/hr-control-API",
    demo_url: "https://documenter.getpostman.com/view/20745940/Uz5DocEb",
    img_print: "",
    type: "back",
  },
];
