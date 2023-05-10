import Image from "next/image";
import kenzie from "/public/images/kenzie.jpg";
import { techsData } from "@/data/techs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { softwares } from "@/data/techs";

export default function About() {
  return (
    <section className="space-y-6">
      <h1 className="mb-5 ">Sobre mim...</h1>
      <p className="mb-5">
        Formado pela Kenzie Academy como Full Stack, aprendi principais
        tecnologias de Front End e Back End. Entre as linguagens e tecnologias
        aprendidas, estão HTML5, CSS3, JavaScript (ES6 +), React, Redux, Python
        (Django e Flask),Node.js, Express, e SQL. Além de soft skills
        disponíveis para o mercado de trabalho, Scrum, Kanban.
      </p>
      <Image
        src={kenzie}
        alt="certificado de conclusão de curso kenzie"
        width={400}
        className="rounded-lg mx-auto"
      ></Image>
      <p>
        A partir disso estou buscando aprender novas tecnologias que se destacam
        no mercado, como Next.js, Tailwinds, e focado em criar projetos pessoais
        fullstack com Next.js + express.js/typeORM e postgreSQL.
      </p>

      <p className="text-center">E a minha jornada continua . . .</p>

      <section>
        <h2 className="mt-10 mb-4 text-center">
          Algumas habilidades e tecnologias que tenho trabalhado...
        </h2>
        <ul className="flex justify-center flex-wrap">
          {techsData.map((tech, index) => (
            <li className=" flex p-1 m-1 rounded bg-green-950" key={index}>
              <FontAwesomeIcon className="w-4" icon={tech.icon} />
              <span className="ml-1">{tech.name}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-center">Softwares...</h2>
        <ul className="flex justify-center flex-wrap">
          {softwares.map((software, index) => (
            <li className="p-1 m-1 rounded bg-blue-950" key={index}>
              <span className="ml-1">{software}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-center">hardware...</h2>
        <ul className="flex justify-center flex-wrap">
          <li className="p-1 m-1 rounded bg-yellow-800">
            Processador: I5-9400F
          </li>
          <li className="p-1 m-1 rounded bg-yellow-800">
            memórias: 16gb(2x8) 2666mhz
          </li>
          <li className="p-1 m-1 rounded bg-yellow-800">
            Vídeo: NVIDIA RTX 2060
          </li>
        </ul>
      </section>
    </section>
  );
}
