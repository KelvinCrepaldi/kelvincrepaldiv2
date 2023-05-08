import {
  faHtml5,
  faCss3,
  faSquareJs,
  faReact,
  faDocker,
  faPython,
  faNodeJs,
  faTrello,
  faGit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";

import { ITechTag } from "@/interfaces/techTag.interface";

export const techsData: ITechTag[] = [
  { name: "HTML5", icon: faHtml5 },
  { name: "CSS3", icon: faCss3 },
  { name: "Javascript", icon: faSquareJs },
  { name: "Typescript", icon: faSquareJs },
  { name: "React.js", icon: faReact },
  { name: "Next.js", icon: faReact },
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

export const softwares: string[] = [
  "VSCode",
  "Instant Eyedropper",
  "Discord",
  "Figma",
  "Slack",
  "Trello",
  "Dbeaver",
  "Vercel",
  "github",
];
