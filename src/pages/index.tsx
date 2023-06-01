import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { projectsData } from "@/data/projects";
import CardProject from "@/components/CardProject";
import NotesContainer from "@/components/NotesContainer";

export default function Home() {
  const projectList = projectsData.slice(0, 6);
  return (
    <main className="space-y-10">
      <section className="h-60 md:h-80 w-80 md:w-96 ">
        <h2>Olá, eu sou Kelvin Crepaldi</h2>
        <span className="text-3xl">Desenvolvedor Full-Stack</span>
        <p className="text-green-400 mt-3">
          Esse website é meu espaço, criado para guardar algumas coisas que
          aprendi e criei durante meu tempo como programador 💾 Seja bem
          vindo...
        </p>
        <div className="flex text-blue-500 text-4xl">
          <Link href={"https://github.com/KelvinCrepaldi"}>
            <FontAwesomeIcon
              icon={faGithub}
              className="m-2 hover:text-green-500 transition w-10"
            />
          </Link>
          <Link href={""}>
            <FontAwesomeIcon
              icon={faLinkedin}
              className="m-2 hover:text-green-500 transition  w-9"
            ></FontAwesomeIcon>
          </Link>
        </div>
      </section>

      <section>
        <div className="flex justify-between font-bold my-6 mx-1">
          <h2>Projetos...</h2>
          <Link href="/portfolio">Ver completo</Link>
        </div>
        <div className="flex flex-wrap">
          {projectList.map((project, index) => (
            <div className="flex w-full md:w-1/2 py-1 px-0.5" key={index}>
              <CardProject project={project} />
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="flex justify-between font-bold my-6 mx-1">
          <h2>Últimas anotações...</h2>
          <Link href="/notes">Ver completo</Link>
        </div>
        <div>
          <NotesContainer home={true} />
        </div>
      </section>
    </main>
  );
}
