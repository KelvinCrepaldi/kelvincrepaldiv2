import Link from "next/link";
import CardProject from "@/components/CardProject";
import { projectsData } from "@/data/projects";
export default function Home() {
  return (
    <main className="m-10">
      <section className="h-60">
        <h1>Olá, eu sou Kelvin Crepaldi</h1>
        <h2>Desenvolvedor Full-Stack</h2>
        <p className="text-green-400">
          Esse website é meu espaço, criado para guardar algumas coisas que
          aprendi e criei durante meu tempo como programador 💾 Seja bem
          vindo...
        </p>
      </section>

      <section>
        <div className="flex justify-between font-bold my-6">
          <h2>Projetos...</h2>
          <Link href="/portfolio">Ver completo</Link>
        </div>
        <div className="flex flex-wrap">
          {projectsData.map((project, index) => (
            <div className="flex w-full md:w-1/2 p-1" key={index}>
              <CardProject project={project}></CardProject>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
