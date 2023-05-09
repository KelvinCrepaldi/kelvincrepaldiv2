import Link from "next/link";
import CardProject from "@/components/CardProject";
import { projectsData } from "@/data/projects";
export default function Home() {
  const projectList = projectsData.slice(0, 6);
  return (
    <main className="space-y-10">
      <section className="h-60 md:h-80 w-80 md:w-96 mt-5">
        <h1>Olá, eu sou Kelvin Crepaldi</h1>
        <span className="text-lg">Desenvolvedor Full-Stack</span>
        <p className="text-green-400 mt-3">
          Esse website é meu espaço, criado para guardar algumas coisas que
          aprendi e criei durante meu tempo como programador 💾 Seja bem
          vindo...
        </p>
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
          <h2>Ultimas anotações...</h2>
          <Link href="/notes">Ver completo</Link>
        </div>
        <div>
          <ul className="space-y-1">
            <li>
              <Link
                className="px-1 text-green-400 text-left border-b border-zinc-700 flex justify-between"
                href="/notes/postgresql"
              >
                <strong>Postgresql</strong> <span>08/05/2023</span>
              </Link>
            </li>
            <li>
              <Link
                className="px-1 text-green-400 text-left border-b border-zinc-700 flex justify-between"
                href="/notes/postgresql"
              >
                <strong>Postgresql</strong> <span>08/05/2023</span>
              </Link>
            </li>
            <li>
              <Link
                className="px-1 text-green-400 text-left border-b border-zinc-700 flex justify-between"
                href="/notes/postgresql"
              >
                <strong>Postgresql</strong> <span>08/05/2023</span>
              </Link>
            </li>
            <li>
              <Link
                className="px-1 text-green-400 text-left border-b border-zinc-700 flex justify-between"
                href="/notes/postgresql"
              >
                <strong>Postgresql</strong> <span>08/05/2023</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
